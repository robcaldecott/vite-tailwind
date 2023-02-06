import { ReactNode } from "react";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import { useTheme } from "@/providers/ThemeProvider";
import { AppBar } from "../AppBar";
import { IconButton } from "../IconButton";
import { Text } from "../Text";

interface AppHeaderProps {
  title: ReactNode;
}

export function AppHeader(props: AppHeaderProps) {
  const { mode, setMode } = useTheme();

  return (
    <AppBar>
      <Text component="h1" variant="h3" color="inherit" flexGrow={1}>
        {props.title}
      </Text>

      {/* Theme switcher. */}
      <IconButton
        color="inherit"
        icon={mode === "light" ? MoonIcon : SunIcon}
        edge="end"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        aria-label="Toggle light/dark mode"
      />
    </AppBar>
  );
}
