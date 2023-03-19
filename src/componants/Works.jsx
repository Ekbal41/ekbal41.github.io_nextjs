import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image as ChakraImage,
  Slide,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

function Works({ title, desc, _bg, data }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={_bg} color={colorMode === "light" ? "" : "gray.200"}>
        <Container
          maxW={{ base: "100%", md: "90%" }}
          paddingTop={6}
          paddingBottom={24}
        >
          <Box my={12}>
            <Heading>{title}</Heading>
            <Text fontSize={"2xl"}>{desc}</Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={6}
          >
            {
              //if data show data
              data &&
                data.map((item) => (
                  <GridItem w="100%">
                    <Box
                      sx={{
                        transition: "all 0.2s ease-in-out",
                      }}
                      w={"98%"}
                      p={6}
                      borderRadius={12}
                      border="4px"
                      borderColor={
                        colorMode === "light" ? "gray.200" : "#282a2d"
                      }
                      bg={colorMode === "light" ? "white" : "#17181b"}
                      _hover={{ transform: "scale(1.05)" }}
                    >
                      <ChakraImage
                        as={Image}
                        borderRadius={4}
                        objectFit={"fill"}
                        src={item.image}
                        h={330}
                        w={"100%"}
                        alt="Dan Abramov"
                      />
                      <Text
                        fontWeight={"bold"}
                        fontSize={"3xl"}
                        my={2}
                        textTransform={"capitalize"}
                      >
                        {item.name}
                      </Text>
                      <Text fontSize={"xl"}>{item.desc}</Text>
                    </Box>
                  </GridItem>
                ))
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Works;
