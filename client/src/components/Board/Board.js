import React, { useCallback, useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/core";
import Product from "../Product/Product";
import { getProducts } from "../../api/products.api";
import BoardToolbar from "./BoardToolbar/BoardToolbar";

const Board = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = useCallback(async () => {
    const products = await getProducts();
    setProducts(products);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box height="85%" m={6} d="flex" flexDirection="column" alignItems="center">
      <BoardToolbar
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Grid
        templateColumns={[
          "repeat(1, 250px)",
          "repeat(2, 250px)",
          "repeat(3, 250px)",
          "repeat(5, 250px)"
        ]}
        gap={6}
        mt={5}
      >
        {/* Display all products or filtered one */}
        {!filteredProducts
          ? products.map((product, idx) => (
              <Product key={`product${idx}`} product={product} />
            ))
          : filteredProducts.map((product, idx) => (
              <Product key={`product${idx}`} product={product} />
            ))}
      </Grid>
    </Box>
  );
};

export default Board;
