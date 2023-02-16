"use client";
import React from "react";

import { Inter } from "@next/font/google";
import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { Specializations } from "@/constant/Courses";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        background="rgba(255,255,255,0.25)"
        zIndex={10}
        p="1rem 2rem 1rem 2rem"
        justify="space-between"
        align="center"
        pos="sticky"
        top="0"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <Link href={`/`}>
          <Image src={logo} alt="logo" width={100} />
        </Link>
        <Box>
          <Link
            href={`about`}
            className={inter.className}
            style={{ color: "#ffff", fontSize: "1rem", fontWeight: "500" }}
          >
            About
          </Link>
          <Menu isOpen={isOpen}>
            <MenuButton
              ml="2rem"
              p="12px"
              borderRadius={50}
              borderColor="transparent"
              outline="none"
              background="linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)"
              aria-label="Courses"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              className={inter.className}
              fontWeight="700"
              fontSize="1rem"
              letterSpacing="2px"
              color="#ffff"
            >
              Courses {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              background="linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)"
              border="transparent"
            >
              {Specializations.map((course) => (
                <Link
                  href={`/courses/${course.id}`}
                  onClick={onToggle}
                  key={course.id}
                >
                  <MenuItem
                    bg="transparent"
                    fontWeight="semibold"
                    _hover={{ color: "#ffff" }}
                  >
                    {course.title}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
