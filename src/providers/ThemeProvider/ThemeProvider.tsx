import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Mode = "light" | "dark";

interface ThemeData {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeData | undefined>(undefined);

function isDark() {
  return document.documentElement.classList.contains("dark");
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const currentlyDark = isDark();
    if (mode === "dark" && !currentlyDark) {
      document.documentElement.classList.add("dark");
    } else if (mode === "light" && currentlyDark) {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}
