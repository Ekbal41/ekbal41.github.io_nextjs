import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image as ChakraImage,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import Chakra from "public/chakra.png";
import Cmdk from "public/cmdk.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ReactImage from "public/react.png";
//import Image from next as alias
import Image from "next/image";

function With() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={colorMode === "light" ? "blackAlpha.100" : "#0e1013"}
        paddingBottom={24}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={{ base: "100%", md: "90%" }}>
          <Box py={12}>
            <Heading>This website useses</Heading>
            {/* <Text fontSize={"2xl"}></Text> */}
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1 ,1fr)", md: "repeat(3 ,1fr)" }}
            gap={6}
          >
            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={Chakra}
                  objectFit={"cover"}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  Chakra Ui
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>

            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={Cmdk}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  React-Cmdk
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={ReactImage}
                  objectFit={"cover"}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  React JS
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={ReactImage}
                  objectFit={"cover"}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={Chakra}
                  objectFit={"cover"}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <ChakraImage
                  as={Image}
                  borderRadius={4}
                  src={Chakra}
                  objectFit={"cover"}
                  h={{ base: 350, md: 185 }}
                  w={"100%"}
                  alt="Dan Abramov"
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor
                </Text>
                <HStack fontSize={"xl"}>
                  <Text>Visit Them</Text>
                  <Spacer />
                  <ExternalLinkIcon />
                </HStack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default With;
