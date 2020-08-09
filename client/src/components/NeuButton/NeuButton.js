import React from "react";
import { Button, IconButton } from "@chakra-ui/core";

const NeuButton = ({ label, icon, onClick }) => {
  return (
    <>
      {!label ? (
        <IconButton
          icon={icon}
          m={3}
          border="1px solid #fff"
          bg="#EAF0F8"
          boxShadow="0px 12px 16px 0px rgba(255,255,255,0.3), 0px -12px 16px 0px rgba(255,255,255,1)"
          fontWeight="semi-bold"
          color="#66727C"
          onClick={onClick}
        />
      ) : (
        <Button
          leftIcon={icon}
          m={3}
          border="1px solid #fff"
          bg="#EAF0F8"
          boxShadow="0px 12px 16px 0px rgba(255,255,255,0.3), 0px -12px 16px 0px rgba(255,255,255,1)"
          fontWeight="semi-bold"
          color="#66727C"
          onClick={onClick}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default NeuButton;
