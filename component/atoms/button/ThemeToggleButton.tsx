import useTheme from "@/hooks/useTheme";

const ThemeToggleButton = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </>
  );
};

export default ThemeToggleButton;