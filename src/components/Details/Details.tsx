import type { ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";
import type { Vehicle } from "@/types";
import { Alert } from "../Alert";
import { Button } from "../Button";
import { Card, CardActions, CardContent, CardHeader } from "../Card";
import { DeleteDialog } from "../DeleteDialog";
import { Skeleton } from "../Skeleton";

export function DetailsLoading() {
  const intl = useIntl();

  return (
    <Card
      aria-label={intl.formatMessage({
        id: "41e661",
        defaultMessage: "Loading vehicle",
      })}
    >
      <CardHeader
        title={<Skeleton />}
        subheader={<Skeleton />}
        divider
        className="bg-sky-50"
      />
      <CardContent>
        {[...Array(16).keys()].map((key) => (
          <Skeleton key={key} height={20} />
        ))}
      </CardContent>
    </Card>
  );
}

interface SwatchProps {
  color: string;
}

function Swatch(props: SwatchProps) {
  return (
    <div className="flex items-center space-x-1">
      <span
        className="inline-block h-4 w-4 rounded-full border border-slate-300"
        style={{ backgroundColor: props.color.replace(/ /g, "") }}
      />
      <span>{props.color.charAt(0).toUpperCase() + props.color.slice(1)}</span>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: ReactNode;
  value: ReactNode;
}

function Field(props: FieldProps) {
  return (
    <>
      <dt
        id={props.id}
        className="mt-4 font-sans text-base font-medium text-slate-900 first:mt-0 dark:text-white"
      >
        {props.label}
      </dt>
      <dd
        className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
        aria-labelledby={props.id}
      >
        {props.value}
      </dd>
    </>
  );
}

interface DetailsProps {
  vehicle: Vehicle;
  onDelete: (cb: () => void) => void;
  error: Error | null;
  onResetError: () => void;
}

export function Details(props: DetailsProps) {
  const intl = useIntl();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Card
        aria-label={intl.formatMessage({
          id: "dedf9e",
          defaultMessage: "Vehicle details",
        })}
      >
        <CardHeader
          title={`${props.vehicle.manufacturer} ${props.vehicle.model} ${props.vehicle.type}`}
          subheader={props.vehicle.registrationNumber}
          divider
        />
        <CardContent divider>
          <dl>
            {/* Color */}
            <Field
              id="color"
              label={<FormattedMessage id="dfe607" defaultMessage="Colour" />}
              value={<Swatch color={props.vehicle.color} />}
            />

            {/* Fuel */}
            <Field
              id="fuel"
              label={<FormattedMessage id="94fc56" defaultMessage="Fuel" />}
              value={props.vehicle.fuel}
            />

            {/* VIN */}
            <Field
              id="vin"
              label={<FormattedMessage id="e37057" defaultMessage="VIN" />}
              value={props.vehicle.vin}
            />

            {/* Mileage */}
            <Field
              id="mileage"
              label={<FormattedMessage id="87df07" defaultMessage="Mileage" />}
              value={<FormattedNumber value={props.vehicle.mileage} />}
            />

            {/* Registration date */}
            <Field
              id="date"
              label={
                <FormattedMessage
                  id="22ffd0"
                  defaultMessage="Registration date"
                />
              }
              value={
                <FormattedMessage
                  id="4d637f"
                  defaultMessage="{date, date, full}"
                  values={{ date: new Date(props.vehicle.registrationDate) }}
                />
              }
            />
          </dl>
        </CardContent>
        <CardActions>
          {props.error ? (
            <Alert
              grow
              label={props.error.message}
              action={
                <Button variant="secondary" onClick={props.onResetError}>
                  <FormattedMessage id="d3d2e6" defaultMessage="Close" />
                </Button>
              }
            />
          ) : (
            <Button
              variant="error"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              <FormattedMessage id="bb8265" defaultMessage="Delete vehicle" />
            </Button>
          )}
        </CardActions>
      </Card>

      <DeleteDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onDelete={() => {
          props.onDelete(() => setShowDialog(false));
        }}
      />
    </>
  );
}
