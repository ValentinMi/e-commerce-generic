import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";

import Main from "./pages/Main/Main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
