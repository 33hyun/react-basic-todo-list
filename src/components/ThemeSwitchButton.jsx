import { useThemeStore } from "../hooks/useThemeStore";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="fixed bottom-8 right-4 z-30 bg-white shadow-md rounded-lg p-3">
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitchButton;