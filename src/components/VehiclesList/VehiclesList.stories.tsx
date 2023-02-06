import { Meta, StoryObj } from "@storybook/react";
import { vehicles } from "@/mocks/vehicles";
import { FilterProvider } from "@/providers/FilterProvider";
import { VehiclesList, VehiclesLoading } from ".";

export default {
  title: "Components/VehiclesList",
  component: VehiclesList,
  args: {
    vehicles,
  },
  decorators: [
    (Story) => (
      <FilterProvider>
        <Story />
      </FilterProvider>
    ),
  ],
} as Meta<typeof VehiclesList>;

type Story = StoryObj<typeof VehiclesList>;

export const Loading = () => <VehiclesLoading />;

export const Data: Story = {};

export const Empty: Story = {
  args: {
    vehicles: [],
  },
};
