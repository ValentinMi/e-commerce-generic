import React from "react";
import { Button } from "@chakra-ui/core";

const NeuButton = ({ label }) => {
  return (
    <Button
      leftIcon="add"
      my={3}
      border="1px solid #fff"
      bg="#EAF0F8"
      boxShadow="0px 12px 16px 0px rgba(255,255,255,0.3), 0px -12px 16px 0px rgba(255,255,255,1)"
      fontWeight="semi-bold"
      color="#66727C"
    >
      {label}
    </Button>
  );
};

export default NeuButton;
