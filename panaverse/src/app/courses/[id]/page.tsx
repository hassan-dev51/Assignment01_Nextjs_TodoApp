"use client";
import { Specializations } from "@/constant/Courses";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { Montserrat } from "@next/font/google";
import { LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });
const SpecializationsPage = ({ params }: { params: { id: string } }) => {
  const individualCourse = Specializations.filter(
    (course) => course.id == params.id
  );

  return (
    <>
      <Box mx="2rem" mt="4rem">
        {individualCourse.map((course) => (
          <Box key={course.id}>
            <Flex
              className={`${montserrat.className} flex-container`}
              align="center"
              mb="1rem"
            >
              <Heading
                bgGradient="linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)"
                bgClip="text"
                text-fill-color="transparent"
                fontSize="46px"
                fontWeight="700px"
              >
                {course.title}
              </Heading>
              <Text>{course.quarter}</Text>
              <Text>{course.content}</Text>
              <Text>{course.duration}</Text>
              <Text>{course.coursePara}</Text>
            </Flex>
            <Heading
              bgGradient="linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)"
              bgClip="text"
              text-fill-color="transparent"
              fontSize="46px"
              fontWeight="700px"
            >
              {course.courseOutline}
            </Heading>
            <Flex className={`${montserrat.className} flex-container`}>
              <Text fontSize="26px">{course.module1}</Text>
              {course.module1Link?.map((link) => (
                <Flex key={link.id} flexDirection="column">
                  <Box color="#8176AF" _hover={{ color: "white" }}>
                    <LinkIcon mr="1rem" />{" "}
                    <Link href={`${link.link}`}>{link.link}</Link>
                  </Box>
                </Flex>
              ))}
              <Flex gap="1rem" flexDirection="column">
                <Text fontSize="26px">{course.module2}</Text>
                {course.module2Links?.map((link) => (
                  <Flex key={link.id} flexDirection="column">
                    <Box color="#8176AF" _hover={{ color: "white" }}>
                      <LinkIcon mr="1rem" />{" "}
                      <Link href={`${link.link}`}>{link.link}</Link>
                    </Box>
                  </Flex>
                ))}
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.module3}</Text>
                  {course.module3Links?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text>{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.link}</Link>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.module4}</Text>
                  {course.module4Links?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text>{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.link}</Link>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.projectPart1}</Text>
                  <Text fontSize="26px">{course.projectPart1Title}</Text>
                  {course.projectPart1Link?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text>{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.link}</Link>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.projectPart2}</Text>
                  <Text fontSize="26px">{course.projectPart2Title}</Text>
                  {course.projectPart2Link?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text>{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.link}</Link>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.projectPart3}</Text>
                  <Text>{course.projectPart3Title}</Text>
                  <Text>{course.project3Description}</Text>
                </Flex>
                <Flex gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.projectPart4}</Text>
                  <Text>{course.projectPart4Title}</Text>
                  <Text>{course.project4Description}</Text>
                  {course.project4Links?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text>{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.link}</Link>
                      </Box>
                    </Flex>
                  ))}
                  <Flex gap="1rem" flexDirection="column">
                    <Text fontSize="26px">{course.projectPart5}</Text>
                    <Text>{course.projectPart5title}</Text>
                    <Text>{course.project5Description}</Text>
                  </Flex>
                  <Flex gap="1rem" flexDirection="column">
                    <Text fontSize="26px">{course.projectPart6}</Text>
                    <Text>{course.projectPart6title}</Text>
                    <Box color="#8176AF" _hover={{ color: "white" }}>
                      <LinkIcon mr="1rem" />{" "}
                      <Link href={`${course.project6Link}`}>
                        {course.project6Link}
                      </Link>
                    </Box>
                  </Flex>
                  <Flex gap="1rem" flexDirection="column">
                    <Text fontSize="26px">{course.projectPart7}</Text>
                    <Text>{course.projectPart7title}</Text>
                    <Box color="#8176AF" _hover={{ color: "white" }}>
                      <LinkIcon mr="1rem" />{" "}
                      <Link href={`${course.project7Link}`}>
                        {course.project7Link}
                      </Link>
                    </Box>
                  </Flex>
                  <Flex gap="1rem" flexDirection="column">
                    <Text fontSize="26px">{course.projectPart8}</Text>
                    <Text fontSize="26px">{course.projectPart8title}</Text>
                    {course.project8Links?.map((link) => (
                      <Flex key={link.id} flexDirection="column">
                        <Text>{link.title}</Text>
                        <Box color="#8176AF" _hover={{ color: "white" }}>
                          <LinkIcon mr="1rem" />{" "}
                          <Link href={`${link.link}`}>{link.link}</Link>
                        </Box>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SpecializationsPage;
