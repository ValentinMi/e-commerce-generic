import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/core";

const Product = ({ product }) => {
  const HOST_IMG_BASE_URL = "http://localhost:8000";
  const imgSrc = HOST_IMG_BASE_URL + `/${product.imgUrl}`;
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="white"
      boxShadow="0px 30px 60px 0px rgba(0,0,0,0.35), 0px -30px 60px 0px rgba(248,252,255,0.5)"
      borderRadius="12px"
      bg="#EAF0F8"
      maxWidth="250px"
      p={2}
      cursor="pointer"
    >
      <Image
        src={imgSrc}
        alt="Un produit"
        size="200px"
        p={3}
        borderRadius="12px"
      />
      <Text>{product.name}</Text>
      {/* <Text>{product.description}</Text> */}
      <Text>{product.price} €</Text>
      <Button variantColor="green" leftIcon="add">
        Add to cart
      </Button>
    </Box>
  );
};

export default Product;
