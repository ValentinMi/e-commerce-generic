import React from "react";
import { Box } from "@chakra-ui/core";
import Product from "../Product/Product";

const Board = ({ products }) => {
  return (
    <Box width="85%" height="85%" bg="white" d="flex">
      {products.map((product, idx) => (
        <Product key={`product${idx}`} product={product} />
      ))}
    </Box>
  );
};

export default Board;
