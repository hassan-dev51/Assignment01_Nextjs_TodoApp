"use client";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import arrow from "../assets/arrow.png";
import { detailCourse, quarters } from "@/constant/Courses";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const Quarter = (props: { text: number }) => {
  return (
    <>
      <Box
        w={`198px`}
        h="198px"
        background="rgba(13, 13, 13, 0.32)"
        _hover={{
          background: "rgba(13, 13, 13)",
          transition: "all 0.5s ease-in-out",
        }}
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w={`160px`}
          h="160px"
          background="linear-gradient(251.27deg, #C0B7E8 12.87%, #8176AF 89.33%)"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="#343045"
            fontSize="64px"
            fontWeight="700"
            fontStyle={"normal"}
            lineHeight="78px"
            className={montserrat.className}
          >
            {props.text}
          </Text>
        </Box>
      </Box>
    </>
  );
};
const CoreCourses = () => {
  return (
    <>
      <Box mx="2rem">
        {" "}
        <Text
          as="h2"
          color="white"
          fontSize="36px"
          fontWeight="700"
          fontStyle={"normal"}
          className={montserrat.className}
        >
          Core Courses
        </Text>
        <Text
          color="white"
          fontSize="36px"
          fontWeight="300"
          fontStyle={"normal"}
          lineHeight="44px"
          className={montserrat.className}
        >
          Common in All Specializations
        </Text>
        <Text
          color="white"
          fontSize="16px"
          fontWeight="400"
          fontStyle={"normal"}
          lineHeight="20px"
          className={montserrat.className}
        >
          Every participant of the program will start by completing the
          following three core courses:
        </Text>
        <Flex
          className="vector15"
          justify="space-between"
          align="center"
          mt="4rem"
        >
          {detailCourse.map((currElem) => (
            <Link href={`/quarter/${currElem.id}`} key={currElem.id}>
              <Quarter text={currElem.id} />
            </Link>
          ))}
          {/* <Link href={`/q2`}>
            <Quarter text="02" />
          </Link>
          <Link href={`/q3`}>
            <Quarter text="03" />
          </Link> */}
        </Flex>
        <Flex justify="space-between" align="center" mt="4rem">
          {quarters.map((quarter) => (
            <Flex flexDirection="column" key={quarter.id}>
              <Flex justify="flex-start" align="center">
                <Image src={arrow} alt="arrow" width={67} />
                <Text
                  color="white"
                  fontSize="24px"
                  fontWeight="700"
                  fontStyle={"normal"}
                  lineHeight="29px"
                  className={montserrat.className}
                  _hover={{
                    background:
                      "linear-gradient(251.27deg, #C0B7E8 12.87%, #8176AF 89.33%)",
                    backgroundClip: "text",
                  }}
                >
                  <Link href={`/q${quarter.id}`}>{quarter.title}</Link>
                </Text>
              </Flex>
              <Text
                as="p"
                color="white"
                fontSize="16px"
                fontWeight="400"
                fontStyle={"normal"}
                lineHeight="20px"
              >
                {quarter.desc}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default CoreCourses;
