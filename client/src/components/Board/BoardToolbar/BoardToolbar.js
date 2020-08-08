import React, { useRef } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon
} from "@chakra-ui/core";

const BoardToolbar = ({ products, setFilteredProducts }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    // Set timeout to avoid useless refresh
    const matchingProducts = products.filter(
      product => product.name.indexOf(inputRef.current.value) > -1
    );
    setFilteredProducts(matchingProducts);
  };

  return (
    <Box
      width="100%"
      bg="#EAF0F8"
      height="50px"
      boxShadow="0px 30px 60px 0px rgba(0,0,0,0.35), 0px -30px 60px 0px rgba(248,252,255,0.5)"
      p={2}
      borderRadius="12px"
    >
      <InputGroup width="20%">
        <InputLeftElement children={<Icon name="search" color="gray.500" />} />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search a product"
          onChange={handleSearch}
        />
      </InputGroup>
    </Box>
  );
};

export default BoardToolbar;
