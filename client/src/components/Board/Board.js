import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import Product from "../Product/Product";
import { colors } from "../../style/colors";

const Board = ({ products }) => {
  return (
    <Box width="85%" height="85%" d="flex">
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)"
        ]}
        width="100%"
      >
        {products.map((product, idx) => (
          <Product key={`product${idx}`} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
