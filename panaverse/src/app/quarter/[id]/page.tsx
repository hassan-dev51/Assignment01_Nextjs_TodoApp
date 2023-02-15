"use client";
import React from "react";
import Link from "next/link";

import { detailCourse } from "@/constant/Courses";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { GetStaticProps, GetStaticPaths } from "next";
// interface QuarterData{
//   id:number

// }
const QuarterDetails = ({
  params,
}: {
  params: { id: number; heading: string };
}) => {
  const { id, heading } = params;

  const newArray = detailCourse.find((item) => item.id === id);
  console.log(newArray);

  console.log(heading);
  console.log(id);

  return (
    <>
      <Box mx="2rem" mt="4rem">
        <Box>
          <Heading></Heading>
          {/* {detailCourse.map((course) => ( */}
          <>
            <Box>
              <Heading
                bgGradient="linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)"
                bgClip="text"
                text-fill-color="transparent"
                fontSize="46px"
                fontWeight="700px"
              >
                {/* {props.header} */}
              </Heading>
              {/* <Text>{props.heading}</Text>
              <Text>{props.outline}</Text>
              <Text>{props.duration}</Text> */}
            </Box>
            {/* <Heading>{props.courseHeading}</Heading> */}

            <Box>
              {/* <Text>{course.htmlCss}</Text> */}
              {/* {course.htmlCssLinks.map((link) => ( */}
              {/* <Flex key={link.id}>
                    <Link href={`/${link.link}`}>{link.title}</Link>
                  </Flex> */}
              {/* ))} */}
            </Box>
          </>
          {/* ))} */}
        </Box>
        <Box>
          {/* {detailCourse.map((course) => ( */}
          {/* <Box key={course.id}> */}
          {/* <Text>{course.web3}</Text> */}
          {/* {course.web3Links.map((link) => ( */}
          {/* <Flex key={link.id}>
                  <Link href={`/${link.link}`}>{link.title}</Link>
                </Flex> */}
          {/* // ))} */}
        </Box>
        {/* ))} */}
        {/* </Box> */}
      </Box>
    </>
  );
};
export default QuarterDetails;

export function generateStaticParams(): { id: number; heading: string }[] {
  return detailCourse.map((quarter) => ({
    id: quarter.id,
    heading: quarter.heading,
  }));
}
