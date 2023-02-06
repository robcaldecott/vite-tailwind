import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreateVehicle } from "@/components/CreateVehicle";
import type { Vehicle, VehiclePayload } from "@/types";

export function CreateRoute() {
  const navigate = useNavigate();
  const { mutateAsync } = useMutation<Vehicle, Error, VehiclePayload>((body) =>
    ky.post("/api/vehicles", { json: body }).json()
  );

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs />

      <CreateVehicle
        onSubmit={(data) => {
          return mutateAsync(data, {
            onSuccess: () => {
              navigate("/");
            },
          });
        }}
        onCancel={() => {
          navigate("/");
        }}
      />
    </div>
  );
}
