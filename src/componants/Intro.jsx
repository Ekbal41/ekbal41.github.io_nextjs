import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function Intro() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={colorMode === "light" ? "white" : "#17181b"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={"90%"}>
          <Box py={20}>
            <Heading my={4}>Hello there, I am Asif Ekbal.</Heading>
            <Text fontSize={"2xl"} w={"70%"}>
              A self-taught web developer with a passion for creating beautiful
              and functional websites. I have a strong background in web
              development and I am always looking to learn new technologies. I
              am currently looking for a full time position as a web developer.
            </Text>
            <Text my={4} fontSize={"2xl"}>
              Feel free to view my works below or contact me.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Intro;
