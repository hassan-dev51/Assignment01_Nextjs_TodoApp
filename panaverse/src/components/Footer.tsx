"use client";
import React from "react";

import { Montserrat } from "@next/font/google";
import {
  Box,
  Center,
  Flex,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../assets/logo.png";
import vector from "../assets/Vector 20.png";
import Link from "next/link";
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
const montserrat = Montserrat({ subsets: ["latin"] });

const Footer = () => {
  return (
    <>
      <Box mx="2rem" my="4rem">
        <Flex justify="space-around" align="center">
          <Box>
            <Image src={logo} alt="logo" height={150} />
          </Box>
          <Image src={vector} alt="vector" width={0} />
          <Box>
            <OrderedList
              gap={4}
              color="white"
              fontSize="16px"
              fontWeight="300"
              className={montserrat.className}
            >
              <ListItem>
                <Link href="">Web 3.0 Metaverse Developer</Link>
              </ListItem>
              <ListItem>
                <Link href="">Cloud native Computing</Link>
              </ListItem>
              <ListItem>
                <Link href="">Artificial Intelligence</Link>
              </ListItem>
              <ListItem>
                <Link href="">Internet of Things</Link>
              </ListItem>
              <ListItem>
                <Link href="">Network Automation</Link>
              </ListItem>
              <ListItem>
                <Link href="">Bio Information Technology</Link>
              </ListItem>
            </OrderedList>
          </Box>
          <Image src={vector} alt="vector" width={0} />
          <Box>
            <Text
              color="white"
              fontSize="16px"
              fontWeight="700"
              letterSpacing={0.31}
              className={montserrat.className}
            >
              Social Links
            </Text>
            <Flex justify="space-between" mt="2rem">
              <Link href="https://www.youtube.com/@panaverse/streams">
                <BsYoutube color="#C0B7E8" />
              </Link>

              <Link href="https://www.facebook.com/groups/panaverse">
                <BsFacebook color="#C0B7E8" />
              </Link>
              <Link href="https://www.facebook.com/groups/panaverse">
                <BsGithub color="#C0B7E8" />
              </Link>
              <Link href="https://www.facebook.com/groups/panaverse">
                <BsTwitter color="#C0B7E8" />
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Center
          color="white"
          fontSize="16px"
          fontWeight="700"
          letterSpacing={0.31}
          className={montserrat.className}
          mt="2rem"
        >
          For Education Purpose Only
        </Center>
      </Box>
    </>
  );
};

export default Footer;
