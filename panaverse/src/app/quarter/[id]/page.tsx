"use client";
import React from "react";
import Link from "next/link";

import { detailCourse } from "@/constant/Courses";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Montserrat } from "@next/font/google";
import { LinkIcon } from "@chakra-ui/icons";

const montserrat = Montserrat({ subsets: ["latin"] });

const QuarterDetails = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const data = detailCourse.filter((item) => item.id == id);

  return (
    <>
      <Box mx="2rem" mt="4rem">
        <Box>
          {data.map((course) => (
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
                  {course.header}
                </Heading>
                <Text>{course.heading}</Text>
                <Text>{course.outline}</Text>
                <Text>{course.duration}</Text>
              </Flex>
              <Heading
                bgGradient="linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)"
                bgClip="text"
                text-fill-color="transparent"
                fontSize="46px"
                fontWeight="700px"
              >
                {course.courseHeading}
              </Heading>

              <Flex className={`${montserrat.className} flex-container`}>
                <Text fontSize="26px">{course.module1}</Text>
                {course.module1Links.map((link) => (
                  <Flex key={link.id} flexDirection="column">
                    <Text mb="1rem">{link.title}</Text>
                    <Box color="#8176AF" _hover={{ color: "white" }}>
                      <LinkIcon mr="1rem" />{" "}
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </Box>
                  </Flex>
                ))}
                <Flex key={course.id} gap="1rem" flexDirection="column">
                  <Text fontSize="26px">{course.module2}</Text>
                  {course.module2Links?.map((link) => (
                    <Flex key={link.id} flexDirection="column">
                      <Text mb="1rem">{link.title}</Text>
                      <Box color="#8176AF" _hover={{ color: "white" }}>
                        <LinkIcon mr="1rem" />{" "}
                        <Link href={`${link.link}`}>{link.title}</Link>
                      </Box>
                    </Flex>
                  ))}
                  <Flex key={course.id} gap="1rem" flexDirection="column">
                    <Text fontSize="26px">{course.module3}</Text>
                    {course.module3Links?.map((link) => (
                      <Flex key={link.id} flexDirection="column">
                        <Text mb="1rem">{link.title}</Text>
                        <Box color="#8176AF" _hover={{ color: "white" }}>
                          <LinkIcon mr="1rem" />{" "}
                          <Link href={`${link.link}`}>{link.title}</Link>
                        </Box>
                      </Flex>
                    ))}
                    <Flex key={course.id} gap="1rem" flexDirection="column">
                      <Text fontSize="26px">{course.module4}</Text>
                      {course.module4Links?.map((link) => (
                        <Flex key={link.id} flexDirection="column">
                          <Text mb="1rem">{link.title}</Text>
                          <Box color="#8176AF" _hover={{ color: "white" }}>
                            <LinkIcon mr="1rem" />{" "}
                            <Link href={`${link.link}`}>{link.title}</Link>
                          </Box>
                        </Flex>
                      ))}
                      <Flex key={course.id} gap="1rem" flexDirection="column">
                        <Text fontSize="26px">{course.module5}</Text>
                        <Text>{course.module5title}</Text>
                        <Flex key={course.id} gap="1rem" flexDirection="column">
                          {course.module5Links?.map((link) => (
                            <Flex key={link.id} flexDirection="column">
                              <Text mb="1rem">{link.title}</Text>{" "}
                              <Box color="#8176AF" _hover={{ color: "white" }}>
                                <LinkIcon mr="1rem" />{" "}
                                <Link href={`${link.link}`}>{link.title}</Link>
                              </Box>
                            </Flex>
                          ))}
                          <Flex
                            key={course.id}
                            gap="1rem"
                            flexDirection="column"
                          >
                            <Text fontSize="26px">{course.module6}</Text>
                            {course.module6Links?.map((link) => (
                              <Flex key={link.id} flexDirection="column">
                                <Text mb="1rem">{link.title}</Text>
                                <Box
                                  color="#8176AF"
                                  _hover={{ color: "white" }}
                                >
                                  <LinkIcon mr="1rem" />
                                  <Link href={`${link.link}`}>
                                    {link.title}
                                  </Link>
                                </Box>
                              </Flex>
                            ))}
                            <Flex
                              key={course.id}
                              gap="1rem"
                              flexDirection="column"
                            >
                              <Text fontSize="26px">{course.module7}</Text>
                              {course.module7Links?.map((link) => (
                                <Flex key={link.id} flexDirection="column">
                                  <Text mb="1rem">{link.title}</Text>{" "}
                                  <Box
                                    color="#8176AF"
                                    _hover={{ color: "white" }}
                                  >
                                    <LinkIcon mr="1rem" />{" "}
                                    <Link href={`${link.link}`}>
                                      {link.title}
                                    </Link>
                                  </Box>
                                </Flex>
                              ))}
                              <Flex
                                key={course.id}
                                gap="1rem"
                                flexDirection="column"
                              >
                                <Text fontSize="26px">{course.module8}</Text>
                                {course.module8Links?.map((link) => (
                                  <Flex key={link.id} flexDirection="column">
                                    <Text mb="1rem">{link.title}</Text>
                                    <Box
                                      color="#8176AF"
                                      _hover={{ color: "white" }}
                                    >
                                      <LinkIcon mr="1rem" />{" "}
                                      <Link href={`${link.link}`}>
                                        {link.title}
                                      </Link>
                                    </Box>
                                  </Flex>
                                ))}
                                <Flex key={course.id} flexDirection="column">
                                  <Flex flexDirection={"column"} gap="1rem">
                                    <Text fontSize="26px">
                                      {course.module9}
                                    </Text>
                                    <Text>{course.module9title}</Text>
                                    <Box
                                      color="#8176AF"
                                      _hover={{ color: "white" }}
                                    >
                                      <Link href={`${course.module9Link}`}>
                                        <LinkIcon mr="1rem" />
                                        {course.module9Link}
                                      </Link>
                                    </Box>
                                  </Flex>
                                  <Text fontSize="26px">
                                    {course.web2Project}
                                  </Text>
                                  {course.web2ProjectLink?.map((link) => (
                                    <Flex key={link.id} flexDirection="column">
                                      <Box
                                        color="#8176AF"
                                        _hover={{ color: "white" }}
                                      >
                                        <LinkIcon mr="1rem" />
                                        <Link href={`${link.link}`}>
                                          {link.title}
                                        </Link>
                                      </Box>
                                    </Flex>
                                  ))}
                                </Flex>
                                <Flex
                                  key={course.id}
                                  gap="1rem"
                                  flexDirection="column"
                                >
                                  <Text fontSize="26px">
                                    {course.quarterBreak}
                                  </Text>
                                  <Text>{course.quartersBreakAssignments}</Text>
                                  {course.quartersBreakLinks?.map((link) => (
                                    <Flex key={link.id} flexDirection="column">
                                      <Text mb="1rem">{link.title}</Text>
                                      <Box
                                        color="#8176AF"
                                        _hover={{ color: "white" }}
                                      >
                                        <LinkIcon mr="1rem" />
                                        <Link href={`${link.link}`}>
                                          {link.title}
                                        </Link>
                                      </Box>
                                    </Flex>
                                  ))}
                                </Flex>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default QuarterDetails;
