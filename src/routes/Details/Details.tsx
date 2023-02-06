import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ky from "ky";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Details, DetailsLoading } from "@/components/Details";
import { PageError } from "@/components/PageError";
import type { Vehicle } from "@/types";

export function DetailsRoute() {
  const navigate = useNavigate();
  const { id } = useParams();

  const detailsQuery = useQuery<Vehicle, Error>({
    queryKey: ["vehicle", id],
    queryFn: () => ky.get(`/api/vehicles/${id}`).json(),
  });

  const queryClient = useQueryClient();
  const deleteQuery = useMutation<Vehicle, Error, string, Array<Vehicle>>(
    (id) => ky.delete(`/api/vehicles/${id}`).json(),
    {
      onMutate: async (id) => {
        await queryClient.cancelQueries(["vehicles"]);
        // Remove the vehicles immediately
        const previous = queryClient.getQueryData<Array<Vehicle>>(["vehicles"]);
        if (previous) {
          queryClient.setQueryData(
            ["vehicles"],
            previous.filter((vehicle) => vehicle.id !== id)
          );
        }
        return previous;
      },
      onError: (error, id, context) => {
        // Revert the original list of vehicles on error
        if (context) {
          queryClient.setQueryData(["vehicles"], context);
        }
      },
      onSettled: () => {
        // Fetch the list of new vehicles
        queryClient.invalidateQueries(["vehicles"]);
      },
    }
  );

  return (
    <div className="mx-auto max-w-3xl">
      {detailsQuery.isLoading && (
        <>
          <Breadcrumbs />
          <DetailsLoading />
        </>
      )}

      {detailsQuery.isError && (
        <PageError error={detailsQuery.error} refetch={detailsQuery.refetch} />
      )}

      {detailsQuery.isSuccess && (
        <>
          <Breadcrumbs
            registrationNumber={detailsQuery.data.registrationNumber}
          />

          <Details
            vehicle={detailsQuery.data}
            onDelete={(cb) => {
              deleteQuery.mutate(id as string, {
                onSuccess: () => {
                  navigate("/");
                },
                onSettled: cb,
              });
            }}
            error={deleteQuery.error}
            onResetError={deleteQuery.reset}
          />
        </>
      )}
    </div>
  );
}
