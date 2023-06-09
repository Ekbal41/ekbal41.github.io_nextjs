import Head from 'next/head'
import Navbar from '@/componants/Navbar'
import { signIn } from 'next-auth/react'
import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, useColorMode, useToast } from '@chakra-ui/react'
import Footer from '@/componants/Footer'
import Commandp from '@/componants/Commandp'
import { useState } from 'react'


export default function SingnIn() {
    const toast = useToast()
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn("credentials", {
            username: user.username,
            password: user.password,
            redirect: false,
        }).then((res) => {
            if (!res.error) {
                toast({
                    title: 'Loged In Successfully.',
                    description: "You will be redirect to admin page now.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                })
                setUser({
                    username: "",
                    password: ""
                })
                setTimeout(() => {
                    window.location.href = '/admin'
                }, 1000)
            } else {
                toast({
                    title: 'Wrong Password.',
                    description: "Please try again.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                })
            }
        })
    };



    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Head>
                <title>Asif Ekbal</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="public/asif.png" />
            </Head>
            <main
            >
                <Commandp>
                    <Navbar />
                    <Box
                        px={{ base: 6, md: 20 }}
                        bg={colorMode === "light" ? "white" : "#17181b"}
                        color={colorMode === "light" ? "" : "gray.200"}
                    >
                        <Container maxW={"8xl"}>
                            <Flex py={12} justifyContent={"center"} alignItems={"center"}>
                                <Box
                                    w={{ base: "100%", md: "70%", lg: "40%" }}
                                    borderRadius={12}
                                    p={8}
                                    border={"1px"}
                                    borderColor={"green.200"}
                                    my={8}
                                >
                                    <Center>  <Heading size="md" mb={6} >
                                        Admin Login
                                    </Heading></Center>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl mb={4} isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input
                                                type="text"
                                                placeholder="Username"
                                                value={user.username}
                                               
                                                variant='filled'
                                                px={4}
                                                py={3}


                                                onChange={(e) => {
                                                    setUser({ ...user, username: e.target.value });
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl mb={4} isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                type="text"
                                                placeholder="Password"
                                                value={user.password}
                                                
                                                mb={8}
                                                variant='filled'
                                                px={4}
                                                py={3}


                                                onChange={(e) => {
                                                    setUser({ ...user, password: e.target.value });
                                                }}
                                            />
                                        </FormControl>
                                        <Button
                                            variant={"solid"}
                                            w={"100%"}
                                            colorScheme={"green"}
                                            type="submit"

                                        >
                                            Log In
                                        </Button>
                                    </form>
                                </Box>
                            </Flex>
                        </Container>
                    </Box>
                    <Footer />
                </Commandp>
            </main>
        </>
    )
}
