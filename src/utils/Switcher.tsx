import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme == "dark") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
  );
}
