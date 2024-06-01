// pages/_app.tsx

import React from "react";
import { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import store from "../store/store";
import "../assets/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // <Provider
    // //   store={store}
    // >
    <Component {...pageProps} />
    // </Provider>
  );
};

export default MyApp;
