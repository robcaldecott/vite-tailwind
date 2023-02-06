import { Meta } from "@storybook/react";
import { Button } from "@/components/Button";
import { Paper } from "@/components/Paper";
import { Text } from "@/components/Text";
import { ThemeProvider, useTheme } from ".";

export default {
  title: "Providers/ThemeProvider",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = () => {
  const { mode, setMode } = useTheme();
  return (
    <Paper className="space-y-4 p-4">
      <Text variant="h2">Mode: {mode}</Text>
      <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        Toggle
      </Button>
    </Paper>
  );
};
