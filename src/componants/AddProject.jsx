import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddProject() {
  const toast = useToast();
  const [projectDetail, setProjectDetail] = useState({
    title: "",
    desc: "",
    image: "",
    link: "",
  });
  const handleClick = () => {
    fetch("http://localhost:3000/api/projects?id=" + 4356786, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDetail),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          toast({
            title: "Added Successfully.",
            description: "Your project added to portfolio.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Somethin went wrong.",
          description: "Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Center>
        <Box
          w={{ base: "100%", md: "75%" }}
          border="1px"
          borderColor="green.200"
          p={4}
          borderRadius={8}
          my={12}
        >
          <Heading mb={8}>Add Projects</Heading>
          <Flex
            gap={4}
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <FormControl mb={4} isRequired>
                <FormLabel>Title</FormLabel>

                <Input
                  type="text"
                  placeholder="Your project title"
                  variant="filled"
                  px={4}
                  py={3}
                  value={projectDetail.title}
                  onChange={(e) => {
                    setProjectDetail({
                      ...projectDetail,
                      title: e.target.value,
                    });
                  }}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Project Image</FormLabel>
                <Input
                  type="text"
                  placeholder="Image"
                  variant="filled"
                  px={4}
                  py={1}
                  value={projectDetail.image}
                  onChange={(e) => {
                    setProjectDetail({
                      ...projectDetail,
                      image: e.target.value,
                    });
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Project Link</FormLabel>

                <Input
                  type="text"
                  placeholder="Link"
                  variant="filled"
                  px={4}
                  py={1}
                  value={projectDetail.link}
                  onChange={(e) => {
                    setProjectDetail({
                      ...projectDetail,
                      link: e.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
            <Box w={{ base: "100%", md: "50%" }}>
              <FormControl mb={4} isRequired>
                <FormLabel>Desc</FormLabel>
                <Textarea
                  borderRadius={8}
                  h={220}
                  type="text"
                  placeholder="Your project desc"
                  variant="filled"
                  px={4}
                  py={3}
                  value={projectDetail.desc}
                  onChange={(e) => {
                    setProjectDetail({
                      ...projectDetail,
                      desc: e.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
          </Flex>

          <Button colorScheme="green" w={"100%"} mt={8} onClick={handleClick}>
            Add Project
          </Button>
        </Box>
      </Center>
    </>
  );
}
