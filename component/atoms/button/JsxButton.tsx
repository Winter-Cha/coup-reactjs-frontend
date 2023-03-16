import { RootState } from "@/redux";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

const JsxButton: FunctionComponent = () => {
  const theme = useSelector((state: RootState) => state.themeSlice.theme);
  return (
    <>
      <button>Log in</button>
      <style jsx>{`
        button {
          height: 45px;
          background: ${theme.backgroundColor};
          font-size: 16px;
          font-weight: bold;
        }
        button:hover {
          background: ${theme.buttonHoverColor};
        }
      `}</style>
    </>
  );
};

export default JsxButton;