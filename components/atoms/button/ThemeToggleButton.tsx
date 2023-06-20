import { useAppDispatch, useAppSelector } from "@/redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { FunctionComponent } from "react";
import JsxButton from "./JsxButton";

const ThemeToggleButton: FunctionComponent = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const clickToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <button onClick={clickToggleTheme}>
        {isDarkMode ? "Bright" : "Dark"}
      </button>
      <style jsx>{`
        button {
          height: 40px;
          background: ${theme.backgroundColor};
          font-size: 16px;
          font-weight: bold;
          color: ${theme.color};
        }
        button:hover {
          background: ${theme.buttonHoverColor};
        }
      `}</style>
    </>
  );
};

export default ThemeToggleButton;
