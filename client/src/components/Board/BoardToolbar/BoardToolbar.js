import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Select
} from "@chakra-ui/core";
import NeuButton from "../../NeuButton/NeuButton";

const BoardToolbar = ({ products, setFilteredProducts }) => {
  const searchRef = useRef(null);
  const [filterSubject, setFilterSubject] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleSearch = () => {
    const matchingProducts = products.filter(
      product => product.name.indexOf(searchRef.current.value) > -1
    );
    setFilteredProducts(matchingProducts);
  };

  const onChangeOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    const newProducts = [...products];
    if (order === "asc") {
      newProducts.sort((a, b) =>
        a[filterSubject] > b[filterSubject] ? 1 : -1
      );
    } else {
      newProducts.sort((a, b) =>
        a[filterSubject] < b[filterSubject] ? 1 : -1
      );
    }
    setFilteredProducts(newProducts);
  }, [order, products, setFilteredProducts, filterSubject]);

  return (
    <Box
      width="100%"
      bg="#EAF0F8"
      height="50px"
      boxShadow="0px 30px 60px 0px rgba(0,0,0,0.35), 0px -30px 60px 0px rgba(248,252,255,0.5)"
      border="1px solid #fff"
      px={3}
      py={4}
      borderRadius="12px"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <InputGroup
        width="20%"
        border="1px solid #fff"
        boxShadow="0px 12px 16px 0px rgba(255,255,255,0.3), 0px -12px 16px 0px rgba(255,255,255,1)"
        bg="#EAF0F8"
      >
        <InputLeftElement
          children={<Icon name="search" color="gray.500" bg="#EAF0F8" />}
        />
        <Input
          ref={searchRef}
          type="text"
          placeholder="Search a product"
          onChange={handleSearch}
          bg="#EAF0F8"
        />
      </InputGroup>
      <Box
        width="15%"
        d="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <NeuButton
          icon={order === "asc" ? "arrow-down" : "arrow-up"}
          onClick={onChangeOrder}
        />
        <Select
          onChange={e => setFilterSubject(e.target.value)}
          width="80%"
          border="1px solid #fff"
          boxShadow="0px 12px 16px 0px rgba(255,255,255,0.3), 0px -12px 16px 0px rgba(255,255,255,1)"
          bg="#EAF0F8"
          borderColor="#fff"
        >
          {["name", "price"].map(fb => (
            <option key={fb} value={fb}>
              {fb}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default BoardToolbar;
