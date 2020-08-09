import React from "react";
import { Box } from "@chakra-ui/core";

import Board from "../../components/Board/Board";

const Main = () => {
  return (
    <Box
      width="100vw"
      height="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      bg="#D2DEEF"
    >
      <Board />
    </Box>
  );
};

export default Main;
