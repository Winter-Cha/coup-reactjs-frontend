import { useAppDispatch, useAppSelector } from "@/redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { FunctionComponent } from "react";
import JsxButton from "./JsxButton";

const ThemeToggleButton: FunctionComponent = () => {
  const isDarkMode = useAppSelector((state) => state.themeSlice.isDarkMode);
  const dispatch = useAppDispatch();
  const clickToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <button onClick={clickToggleTheme}>Toggle Theme</button>
      <h5>Current Theme: {isDarkMode ? "true" : "false"}</h5>
      <JsxButton></JsxButton>
    </>
  );
};

export default ThemeToggleButton;
