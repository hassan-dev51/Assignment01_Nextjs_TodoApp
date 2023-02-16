"use client";
import React from "react";
import Link from "next/link";

import { detailCourse } from "@/constant/Courses";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const QuarterDetails = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const data = detailCourse.filter((item) => item.id == id);
  console.log(data);

  return (
    <>
      <Box mx="2rem" mt="4rem">
        <Box>
          <Heading></Heading>
          {data.map((course) => (
            <>
              <Box>
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
              </Box>
              <Heading>{course.courseHeading}</Heading>

              <Box>
                <Text>{course.module1}</Text>
                {course.module1Links.map((link) => (
                  <Flex key={link.id}>
                    <Link href={`${link.link}`}>{link.title}</Link>
                  </Flex>
                ))}
              </Box>
            </>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module2}</Text>
              {course.module2Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module3}</Text>
              {course.module3Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module4}</Text>
              {course.module4Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module5}</Text>
              {course.module5Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module6}</Text>
              {course.module6Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module7}</Text>
              {course.module7Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Text>{course.module8}</Text>
              {course.module8Links?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          {data.map((course) => (
            <Box key={course.id}>
              <Box>
                <Text>{course.module9}</Text>
                <Text>{course.module9title}</Text>
                <Text>{course.module9Link}</Text>
              </Box>
              <Text>{course.web2Project}</Text>
              {course.web2ProjectLink?.map((link) => (
                <Flex key={link.id}>
                  <Text color="white">{link.title}</Text>
                  <Link href={`${link.link}`}>{link.title}</Link>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};
export default QuarterDetails;
