import {
  ExternalLinkIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Box,
  useColorMode,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Tooltip,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import { RiCommandFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PalletCtx } from "@/context/PalletCotext";
import { signIn, signOut } from "next-auth/react";

function Navbar() {
  const session = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { open, setOpen } = useContext(PalletCtx);

  const toggleCmdK = () => {
    setOpen(!open);
    new Audio("/beep.mp3").play();
  };
  const colorModeHandler = () => {
    toggleColorMode();
    new Audio("/ping.mp3").play();
  };

  return (
    <>
      <Box
        px={{ base: 6, md: 20 }}
        position="sticky"
        top="0"
        zIndex={10}
        bg={colorMode === "light" ? "white" : "#17181b"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={"8xl"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            py={8}
            as="nav"
          >
            <Text fontWeight={"bold"} fontSize={20}>
              Asif Ekbal
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Tooltip label="Command Palette">
                <IconButton
                  className="modebtn"
                  as={Button}
                  colorScheme="gray.50"
                  borderRadius={24}
                  variant="ghost"
                  onClick={toggleCmdK}
                  aria-label="command pallet"
                  icon={<RiCommandFill />}
                />
              </Tooltip>
              <Tooltip label="Color Mode">
                <IconButton
                  className="modebtn"
                  as={Button}
                  colorScheme="gray.50"
                  borderRadius={24}
                  variant="ghost"
                  onClick={colorModeHandler}
                  aria-label="Color Mode toggle"
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                />
              </Tooltip>
              <Box>
                <Menu>
                  <Tooltip label="Profile">
                    <MenuButton
                      as={IconButton}
                      icon={<CgProfile />}
                      borderRadius={24}
                      colorScheme="gray"
                      variant="ghost"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem>All Works </MenuItem>
                      <MenuItem>Contact Me</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Admin">
                      {session.status === "authenticated" ? (
                        <MenuItem
                          as={Link}
                          _hover={{
                            textDecoration: "none",
                            border: "none",
                            shadow: "none",
                          }}
                          type="button"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          Logout <Spacer /> <ExternalLinkIcon />
                        </MenuItem>
                      ) : (
                        <MenuItem
                          as={Link}
                          _hover={{
                            textDecoration: "none",
                            border: "none",
                            shadow: "none",
                          }}
                          type="button"
                          onClick={() => {
                            signIn();
                          }}
                        >
                          Login <Spacer /> <ExternalLinkIcon />
                        </MenuItem>
                      )}
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Find Me On">
                      <MenuItem
                        as={Link}
                        _hover={{
                          textDecoration: "none",
                          border: "none",
                          shadow: "none",
                        }}
                        href={"https://github.com/Ekbal41"}
                      >
                        Github <Spacer /> <ExternalLinkIcon />
                      </MenuItem>
                      <MenuItem
                        as={Link}
                        _hover={{
                          textDecoration: "none",
                          border: "none",
                          shadow: "none",
                        }}
                        href={"https://facebook.com/Ekbal41"}
                      >
                        Facebook <Spacer /> <ExternalLinkIcon />
                      </MenuItem>
                      <MenuItem
                        as={Link}
                        _hover={{
                          textDecoration: "none",
                          border: "none",
                          shadow: "none",
                        }}
                        href={"https://twitter.com/Ekbal41"}
                      >
                        Twitter <Spacer /> <ExternalLinkIcon />
                      </MenuItem>
                      <MenuItem
                        as={Link}
                        _hover={{
                          textDecoration: "none",

                          border: "none",
                          shadow: "none",
                        }}
                        href={"https://www.linkedin.com/in/ekbal41/"}
                      >
                        Linkein <Spacer /> <ExternalLinkIcon />
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
