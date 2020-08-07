import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@chakra-ui/core";

import { getProducts } from "../../api/products.api";

import Board from "../../components/Board/Board";

const Main = () => {
  const [products, setProducts] = useState([]);

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
      width="100vw"
      height="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
      bg="tomato"
    >
      <Board products={products} />
    </Box>
  );
};

export default Main;
