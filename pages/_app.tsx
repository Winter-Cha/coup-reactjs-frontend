import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/utils/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import Copyright from "@/components/templetes/layout/Copyright";
import Navbar from "@/components/templetes/layout/NavBar";
import { Provider } from "react-redux";
import store from "@/redux";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    //redux provider

    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          {/* <Sidebar setMode={setMode} mode={mode} /> */}
          {/* <MiniDrawer> */}
          <Component {...pageProps} />
          <Copyright />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
