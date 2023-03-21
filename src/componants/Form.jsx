import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";

export default function Form({handleSubmit}) {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <>
      <Box
        px={{ base: 6, md: 20 }}
        bg={colorMode === "light" ? "white" : "#17181b"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={"8xl"}>
          <Flex py={20} justifyContent={"center"} alignItems={"center"}>
            <Box
              w={{ base: "100%", md: "50%", lg: "30%" }}
              borderRadius={12}
              p={8}
              border={"2px solid teal"}
              my={8}
            >
              <Heading size="md" mb={6}>
                Admin Login
              </Heading>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  mb={4}
                  autocomplete="on"
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  mb={4}
                  autocomplete="on"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <Button
                  variant={"solid"}
                  w={"100%"}
                  colorScheme={"teal"}
                  type="submit"
                >
                  Log In
                </Button>
              </form>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
