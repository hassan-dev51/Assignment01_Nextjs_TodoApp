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
          <Text>{item.content}</Text>
        </Box>
      ))}
    </>
  );
};

export default SpecializationsPage;
