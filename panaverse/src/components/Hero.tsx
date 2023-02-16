"use client";
import { heroRectangle } from "@/constant/Courses";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../assets/arrow.png";
import mask from "../assets/Mask group.png";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  return (
    <Box pos="relative">
      <Box
        as="div"
        p="0rem 2rem 0rem 2rem"
        display={`flex`}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        mt="4rem"
        className="vectorRight"
      >
        <Flex
          className={`${montserrat.className} `}
          justify={`space-between`}
          p="1rem"
          flexDirection={"column"}
          width={{ base: "100%", md: "100%", lg: "50%" }}
        >
          <Heading>
            <Text
              bgGradient="linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)"
              bgClip="text"
              text-fill-color="transparent"
              fontSize={{ base: "26px", md: "36px", lg: "46px" }}
              fontWeight="700px"
            >
              Certified Web 3.0 and Metaverse Developer
            </Text>
          </Heading>
          <Text
            fontSize={{ md: "14px", lg: "1rem" }}
            mt={{ base: "1rem", md: "1rem", lg: "1rem" }}
            color="#ffff"
            fontWeight="400"
          >
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet Consolidating
            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
            Ambient Computing/IoT, Network Automation, and Bioinformatics
            Technologies
          </Text>
          <Flex align="center">
            <Link href="https://www.panaverse.co" target="_blank">
              <Text
                p="12px"
                borderRadius={40}
                borderColor="transparent"
                outline="none"
                background="linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)"
                aria-label="Courses"
                className={montserrat.className}
                fontWeight="700"
                fontSize="12px"
                letterSpacing="2px"
                color="#343045"
                textAlign="center"
                w="214px"
              >
                Syllabus
              </Text>
            </Link>
            <Image src={arrow} alt="arrow" width={100} />
          </Flex>
        </Flex>
        <Flex
          width={{ base: "100%", md: "100%", lg: "50%" }}
          justify="center"
          className="vector"
        >
          <Image src={mask} alt="header-image" />
        </Flex>
      </Box>
      <Flex
        bg="radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)"
        box-shadow="0px 4px 4px rgba(192, 183, 232, 0.01)"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        justify="space-around"
        align={{ base: "start", md: "start", lg: "center" }}
        gap={{ base: "12px", md: "12px", lg: "0px" }}
        borderRadius="90px"
        m="4rem 2rem 2rem 2rem "
        p="2rem"
        className={montserrat.className}
      >
        {heroRectangle.map((item) => (
          <Flex
            justify="space-evenly"
            align={{ base: "start", md: "start", lg: "center" }}
            key={item.id}
          >
            <Image
              src={item.image}
              alt="location-icon"
              width={70}
              height={70}
              style={{ marginRight: "1rem" }}
            />
            <Box>
              <Text fontSize="24px" color="white">
                {item.title}
              </Text>
              <Text fontSize="14px" color="white">
                {item.desc}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Box m="4rem 2rem 2rem 2rem">
        <Text
          as="h2"
          color="white"
          fontSize={{ base: "26px", md: "36px", lg: "36px" }}
          fontWeight="700"
          fontStyle={"normal"}
          className={montserrat.className}
        >
          The Program in a Nutshell
        </Text>
        <Text
          color="white"
          fontSize={{ base: "26px", md: "36px", lg: "36px" }}
          fontWeight="300"
          fontStyle={"normal"}
          lineHeight="44px"
          className={montserrat.className}
        >
          Earn While You Learn
        </Text>
        <Box mt="2rem">
          <Text
            color="white"
            fontSize="16px"
            fontWeight="400"
            fontStyle={"normal"}
            lineHeight="20px"
            className={montserrat.className}
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program beginning. It resembles a cross
            between a corporate venture and an educational project.
          </Text>
        </Box>
        <Text
          as="h2"
          color="white"
          fontSize={{ base: "26px", md: "36px", lg: "36px" }}
          fontWeight="700"
          fontStyle={"normal"}
          className={montserrat.className}
          mt="2rem"
        >
          Program of Studies
        </Text>

        <Box mt="2rem">
          <Text
            color="white"
            fontSize="16px"
            fontWeight="400"
            fontStyle={"normal"}
            lineHeight="20px"
            className={montserrat.className}
          >
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
