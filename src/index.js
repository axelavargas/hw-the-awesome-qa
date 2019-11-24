import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import qaTheme from "./theme.json";

import App from "./app/App";

const theme = createMuiTheme(qaTheme);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
