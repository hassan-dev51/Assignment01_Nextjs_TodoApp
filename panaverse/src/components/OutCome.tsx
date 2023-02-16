"use client";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { outcomelist } from "@/constant/Courses";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const OutCome = () => {
  return (
    <>
      <Box mx="2rem" mt="4rem">
        <Box
          h={{ base: "auto", md: "auto", lg: "303px" }}
          borderRadius={{ base: "10px", md: "10px", lg: "160px" }}
          className={`${montserrat.className} outcome`}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          p={"2rem"}
        >
          <Text
            color="white"
            fontSize={{ base: "26px", md: "26px", lg: "36px" }}
            fontWeight="700"
          >
            The Outcome for Participants of the Program
          </Text>
          <Text color="white" fontSize="16px" fontWeight="400">
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
        </Box>
        <Box mt={`2rem`}>
          <List spacing={4}>
            {outcomelist.map((out) => (
              <ListItem
                border="2px solid white"
                borderRadius="90px"
                p="1rem"
                color="white"
                fontSize="16px"
                fontWeight="400"
                key={out.id}
                background="radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)"
              >
                <ListIcon
                  as={CheckCircleIcon}
                  borderRadius="90px"
                  color="rgba(192, 183, 232, 1)"
                />
                <Link href={out.link}>{out.title}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default OutCome;
