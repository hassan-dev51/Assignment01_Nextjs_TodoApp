"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });
const Statement = (props: { image: StaticImageData; text: string }) => {
  return (
    <Box pb={{ base: "40px", md: "40px", lg: "89px" }}>
      <Flex justify="center" align="center">
        <Image src={props.image} alt="group" width={40} />
        <Text
          className={inter.className}
          fontWeight="700"
          fontStyle="normal"
          fontSize="18px"
          color="#171923"
          w="220px"
          ml="24px"
        >
          {props.text}
        </Text>
      </Flex>
    </Box>
  );
};

export default Statement;
