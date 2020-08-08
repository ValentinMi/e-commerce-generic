import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";
import NeuButton from "../NeuButton/NeuButton";

const Product = ({ product }) => {
  const HOST_IMG_BASE_URL = "http://localhost:8000";
  const imgSrc = HOST_IMG_BASE_URL + `/${product.imgUrl}`;
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      m={4}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="white"
      boxShadow="0px 30px 60px 0px rgba(0,0,0,0.35), 0px -30px 60px 0px rgba(248,252,255,0.5)"
      borderRadius="12px"
      bg="#EAF0F8"
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
      <NeuButton label="Add to cart" />
    </Box>
  );
};

export default Product;
