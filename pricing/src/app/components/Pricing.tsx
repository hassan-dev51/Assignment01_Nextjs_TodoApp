import React from "react";
import { Inter } from "@next/font/google";

import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Group from "../assets/Group.png";
import Group2 from "../assets/Group (1).png";
import Group3 from "../assets/Group (2).png";
import Icon from "./Icon";
import Statement from "./Statement";
const inter = Inter({ subsets: ["latin"], style: ["normal"] });
const Pricing = () => {
  return (
    <Box pos="relative">
      <Box
        h="397px"
        bg="#6B46C1"
        className={`${inter.className}`}
        pt={{ base: "56px", md: "56px", lg: "89px" }}
      >
        <Text
          as="h1"
          fontSize={{ base: "30px", md: "30px", lg: "48px" }}
          textAlign={{ base: "start", md: "start", lg: "center" }}
          color="#F7FAFC"
          fontWeight="800"
          mx={{ base: "24px", md: "24px", lg: "0px" }}
        >
          Simple pricing for your business
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="500"
          fontStyle="normal"
          opacity="0.84"
          marginTop="16px"
          mx={{ base: "24px", md: "24px", lg: "0px" }}
          color="#F7FAFC"
          textAlign={{ base: "start", md: "start", lg: "center" }}
          lineHeight={{ base: "39px", md: "39px", lg: "32px" }}
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
      <Flex
        as="div"
        pos="absolute"
        top={{ base: "252px", md: "252px", lg: "256px" }}
        left={{ base: "12px", md: "12px", lg: "222px" }}
      >
        <Flex
          bg="white"
          h={{ base: "", md: "", lg: "332px" }}
          w={{ base: "382px", md: "382px", lg: "994px" }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          borderRadius="12px"
          mr={{ base: "24px", md: "24px" }}
          overflow="hidden"
        >
          <Box
            w={{ base: "382px", md: "382px", lg: "378px" }}
            h={{ base: "283px", md: "283px", lg: "332px" }}
            bg="rgba(101, 44, 211, 0.1)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={{ base: "39px", md: "39px" }}
            gap="15px"
          >
            {" "}
            <Text
              color="#171923"
              fontStyle="normal"
              fontWeight="800"
              fontSize="24px"
              lineHeight="32px"
              className={`${inter.className}`}
            >
              Premier PRO
            </Text>
            <Text
              color="#171923"
              fontWeight="800"
              fontSize="60px"
              lineHeight="100%"
              letterSpacing="-0.01em"
              className={`${inter.className}`}
            >
              $329
            </Text>
            <Text
              color="#171923"
              fontWeight="500"
              fontSize="18px"
              lineHeight="28px"
              className={`${inter.className}`}
            >
              billed just once
            </Text>
            <Button
              bg="#805AD5"
              borderRadius="8px"
              color="#F7FAFC"
              textAlign="center"
              w="282px"
              variant="solid"
              _hover={{ bg: "#805AD5" }}
            >
              Get Started
            </Button>
          </Box>
          <Box p={{ base: "31px", md: "31px", lg: "48px" }}>
            {" "}
            <Text
              color="rgba(45, 55, 72, 1)"
              fontStyle="normal"
              fontWeight="400"
              fontSize="18px"
              lineHeight="28px"
              className={`${inter.className}`}
            >
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Icon title={`International calling and messaging API`} />
            <Icon title={`Additional phone numbers`} />
            <Icon title={`Automated messages via Zapier`} />
            <Icon title={`24/7 support and consulting`} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        as="div"
        pos="absolute"
        mt={{ base: "33px", md: "33px" }}
        top={{ base: "898px", md: "898px", lg: "650px" }}
        left={{ base: "24px", md: "24px", lg: "267px" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Statement image={Group} text={`30 days money back Guarantee`} />
        <Statement image={Group2} text={`No setup fees 100% hassle-free`} />
        <Statement
          image={Group3}
          text={`No monthly subscription Pay once and for all`}
        />
      </Flex>
    </Box>
  );
};

export default Pricing;
