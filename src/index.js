import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppContextProvider from "./context";

import "./assets/styles/global.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "rc-rate/assets/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
