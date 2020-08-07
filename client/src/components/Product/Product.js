import React from "react";
import { Box, Text, Button } from "@chakra-ui/core";

const Product = ({ product }) => {
  return (
    <Box
      width="200px"
      height="250px"
      d="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      m={4}
      bg="white"
      border="1px solid black"
    >
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price} €</Text>
      <Button variantColor="green">Add to cart</Button>
    </Box>
  );
};

export default Product;
