"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Pricing />
      </ChakraProvider>
    </main>
  );
}
