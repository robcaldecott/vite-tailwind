import { ReactNode, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import InformationCircleIcon from "@heroicons/react/24/solid/InformationCircleIcon";
import { useFilter } from "@/providers/FilterProvider";
import type { Vehicle } from "@/types";
import { List, ListItem, ListItemLink, ListItemText } from "../List";
import { Paper } from "../Paper";
import { SearchField } from "../SearchField";
import { Skeleton } from "../Skeleton";
import { Text } from "../Text";

export function VehiclesLoading() {
  const intl = useIntl();

  return (
    <Paper
      aria-label={intl.formatMessage({
        id: "fecc6a",
        defaultMessage: "Loading vehicles",
      })}
    >
      <Text
        variant="h3"
        component="h1"
        className="border-b border-b-slate-300 p-4"
      >
        <Skeleton />
      </Text>
      <List dividers>
        {[...Array(10).keys()].map((key) => (
          <ListItem key={key}>
            <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

function NoResults() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <InformationCircleIcon className="h-16 w-16 text-indigo-700 dark:text-indigo-400" />

      <Text variant="h2" component="h2" align="center">
        <FormattedMessage
          id="ea7816"
          defaultMessage="No matching vehicles found."
        />
      </Text>

      <Text variant="body1" align="center" color="secondary">
        <FormattedMessage
          id="5c9204"
          defaultMessage="Please try a different filter."
        />
      </Text>
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
}

function Badge(props: BadgeProps) {
  return (
    <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sky-700 px-2 font-sans text-xs font-medium text-white dark:bg-sky-500">
      {props.children}
    </span>
  );
}

function filterItems(data: Array<Vehicle>, filter: string) {
  return data.filter((vehicle) => {
    if (filter === "") {
      return true;
    }
    const re = new RegExp(filter, "i");
    const description = `${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`;
    return description.search(re) !== -1;
  });
}

interface VehiclesListProps {
  vehicles?: Array<Vehicle>;
}

export function VehiclesList({ vehicles = [] }: VehiclesListProps) {
  const intl = useIntl();
  const { filter, setFilter } = useFilter();
  const [items, setItems] = useState(filterItems(vehicles, filter));
  useEffect(
    () => void setItems(filterItems(vehicles, filter)),
    [filter, vehicles]
  );

  return (
    <Paper
      aria-label={intl.formatMessage({
        id: "eef985",
        defaultMessage: "Vehicle list",
      })}
    >
      <div className="border-b border-b-slate-300 bg-sky-50 p-4 dark:bg-sky-900">
        <div className="flex flex-wrap items-center space-y-4 md:flex-nowrap md:space-y-0">
          <div className="flex grow basis-full items-center space-x-2">
            <Text variant="h2" component="h1">
              <FormattedMessage id="834671" defaultMessage="Vehicles" />
            </Text>
            <Badge>{items.length}</Badge>
          </div>

          <SearchField
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder={intl.formatMessage({
              id: "133484",
              defaultMessage: "Search",
            })}
            className="basis-full md:basis-1/3"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <NoResults />
      ) : (
        <List dividers>
          {items.map((vehicle) => (
            <ListItemLink key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
              <ListItemText
                primary={`${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`}
                secondary={vehicle.registrationNumber}
              />
              <ChevronRightIcon className="h-6 w-6 shrink-0 text-slate-500" />
            </ListItemLink>
          ))}
        </List>
      )}
    </Paper>
  );
}
