// make _app.tsx for me
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux";
import { SnackbarProvider } from "notistack";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
};

export default MyApp;
