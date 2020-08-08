import React, { useCallback, useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/core";
import Product from "../Product/Product";
import { getProducts } from "../../api/products.api";
import BoardToolbar from "./BoardToolbar/BoardToolbar";

const Board = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const fetchData = useCallback(async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box
      width="90%"
      height="85%"
      d="flex"
      flexDirection="column"
      alignItems="center"
    >
      <BoardToolbar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)"
        ]}
        width="100%"
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
