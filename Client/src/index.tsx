import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <Provider store={Store()}>
          <App />
        </Provider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
