import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";

import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
