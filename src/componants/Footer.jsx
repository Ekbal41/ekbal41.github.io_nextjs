import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSpotify, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={colorMode === "light" ? "blackAlpha.100" : "#0e1013"}
        color={colorMode === "light" ? "" : "gray.200"}
        borderTop={colorMode === "light" ? "" : "1px"}
        borderColor={"#282a2d"}
      >
        <Container maxW={{ base: "100%", md: "90%" }} py={12}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={6}
            align="center"
          >
            <GridItem w="100%" paddingTop={4}>
              <Text fontWeight={"bold"}>All Right Reserved 2023</Text>
            </GridItem>
            <GridItem w="100%">
              <Text fontWeight={"bold"}>Design by Gurudutt Perichetla</Text>
              <Text>Powered by React.js, Chakra UI</Text>
            </GridItem>
            <GridItem w="100%" paddingTop={1}>
              <Tooltip label="Email" fontSize="md">
                <Button colorScheme="gray" borderRadius={24} variant="ghost">
                  <MdEmail fontSize={24} />
                </Button>
              </Tooltip>
              <Tooltip label="Linkedin" fontSize="md">
                <Button colorScheme="gray" borderRadius={24} variant="ghost">
                  <AiFillLinkedin fontSize={24} />
                </Button>
              </Tooltip>
              <Tooltip label="Spotify" fontSize="md">
                <Button colorScheme="gray" borderRadius={24} variant="ghost">
                  <FaSpotify fontSize={24} />
                </Button>
              </Tooltip>
              <Tooltip label="Github" fontSize="md">
                <Button colorScheme="gray" borderRadius={24} variant="ghost">
                  <FaGithub fontSize={24} />
                </Button>
              </Tooltip>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
