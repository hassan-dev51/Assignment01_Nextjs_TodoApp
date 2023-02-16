"use client";
import { Specializations } from "@/constant/Courses";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SpecializationsPage = ({ params }: { params: { id: string } }) => {
  const individualCourse = Specializations.filter(
    (course) => course.id == params.id
  );

  return (
    <>
      {individualCourse.map((item) => (
        <Box key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.quarter}</Text>
          <Text>{item.content}</Text>
          <Text>{item.duration}</Text>
          <Text>{item.courseDescription}</Text>
          <Text>{item.coursePara}</Text>
          <Text>{item.courseOutline}</Text>
        </Box>
      ))}
    </>
  );
};

export default SpecializationsPage;
