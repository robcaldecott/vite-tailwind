import { FormattedMessage } from "react-intl";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { PageError } from "@/components/PageError";
import { ResponsiveFab } from "@/components/ResponsiveFab";
import { VehiclesList, VehiclesLoading } from "@/components/VehiclesList";
import type { Vehicle } from "@/types";

export function VehiclesRoute() {
  const { isLoading, isSuccess, data, isError, error, refetch } = useQuery<
    Array<Vehicle>,
    Error
  >({
    queryKey: ["vehicles"],
    queryFn: () => ky.get("/api/vehicles").json(),
  });

  return (
    <div className="mx-auto mb-24 max-w-5xl">
      {isLoading && <VehiclesLoading />}
      {isSuccess && <VehiclesList vehicles={data} />}
      {isError && <PageError error={error} refetch={refetch} />}

      <ResponsiveFab
        to="/create"
        icon={PlusIcon}
        label={<FormattedMessage id="b8eb09" defaultMessage="Create Vehicle" />}
      />
    </div>
  );
}
