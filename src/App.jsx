import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import useTheme, { ThemeProvider } from "./context/ThemContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-[350px] bg-black/30 dark:bg-black shadow-lg rounded-md">
          <ToggleButton />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
