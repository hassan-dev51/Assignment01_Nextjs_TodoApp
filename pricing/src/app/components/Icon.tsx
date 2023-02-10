"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import icon from "../assets/Vector.png";
import React from "react";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });
const Icon = (props: { title: string }) => {
  return (
    <Flex
      gap={{ base: "10px", md: "10px", lg: "20px" }}
      align="center"
      mt="18px"
    >
      <Box
        w="22px"
        h="22px"
        bg="#6134C4"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={icon} alt="vector" width={12} style={{ color: "white" }} />
      </Box>
      <Text
        color="rgba(45, 55, 72, 1)"
        fontStyle="normal"
        fontWeight="400"
        fontSize="18px"
        className={`${inter.className}`}
      >
        {props.title}
      </Text>
    </Flex>
  );
};

export default Icon;
