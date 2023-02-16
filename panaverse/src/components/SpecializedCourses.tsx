"use client";
import React from "react";
import { Montserrat } from "@next/font/google";
import { Box, Flex, Text } from "@chakra-ui/react";

import vector from "../assets/Vector 10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { Specializations } from "@/constant/Courses";
const montserrat = Montserrat({ subsets: ["latin"] });

const CarouselComponent = (props: {
  image: string;
  des: string;
  title: string;
  id: string;
}) => {
  return (
    <Flex
      w={410}
      h={512}
      borderRadius={40}
      background="radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)
  "
      flexDirection={`column`}
      justify="space-evenly"
      align={"center"}
      padding="1rem"
      mr={`1px`}
    >
      <Box
        w={`198px`}
        h="198px"
        background="rgba(13, 13, 13, 0.32)"
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
          <Image
            src={props.image}
            alt={props.title}
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
      <Text
        color="white"
        fontSize="24px"
        fontWeight="700"
        fontStyle={"normal"}
        textAlign="center"
      >
        {props.title}
      </Text>
      <Image src={vector} alt="line" width={154} />
      <Text
        color="white"
        fontSize="12px"
        fontWeight="400"
        fontStyle={"normal"}
        className={montserrat.className}
      >
        {props.des}
      </Text>

      <Link href={`/courses/${props.id}`}>
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
          Learn More
        </Text>
      </Link>
    </Flex>
  );
};

const SpecializedCourses = () => {
  return (
    <>
      <Box mx="2rem" mt="4rem">
        <Text
          as="h2"
          color="white"
          fontSize="36px"
          fontWeight="700"
          fontStyle={"normal"}
          className={montserrat.className}
        >
          Specialized Tracks
        </Text>
        <Text
          color="white"
          fontSize="16px"
          fontWeight="300"
          fontStyle={"normal"}
          lineHeight="44px"
          className={montserrat.className}
        >
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Box>
      <Box mx="2rem" mt="4rem" className="vector14">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {Specializations.map((subject) => (
            <CarouselComponent
              key={subject.id}
              image={subject.image}
              des={subject.des}
              title={subject.title}
              id={subject.id}
            />
          ))}
          {/* <CarouselComponent
            image={wmd}
            title="Web 3.0 (Blockchain) and Metaverse Specialization"
            des=""
          />
          <CarouselComponent
            image={ai}
            title=""
          />
          <CarouselComponent
            image={cnc}
            title="Cloud-Native Computing Specialization"
            des=""
          />
          <CarouselComponent
            image={iot}
            sub="Ambient Computing and IoT Specialization"
            des=""
          />
          <CarouselComponent
            image={bio}
            sub="Genomics and Bioinformatics Specialization"
            des=""
          />
          <CarouselComponent
            image={networking}
            sub="Network Programmability and Automation Specialization"
            des=""
          /> */}
        </Carousel>
      </Box>
    </>
  );
};

export default SpecializedCourses;
