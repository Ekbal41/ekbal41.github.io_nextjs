import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { BsBrightnessHigh } from "react-icons/bs";

export default function ProjectTable({ data }) {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const deleteProject = (id) => {

    fetch("http://localhost:3000/api/projects?id=" + 4356786, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId: id }),
    })
      .then((res) => {
        if (res.ok) {
          toast({
            title: "Deleted Successfully.",
            description: "Your project removed from portfolio.",
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
      <Flex my={12} justifyContent={"center"} alignItems={"center"}>
        <Flex flexWrap={"wrap"} gap={4}>
          {data.map((project) => {
            return (
              <Box
                w={{ base: "100%", md: "50%", lg: "32.33%" }}
                key={project.id}
                bg={colorMode === "light" ? "white" : "#17181b"}
                color={colorMode === "light" ? "" : "gray.200"}
                my={4}
                border={"4px"}
                borderRadius={12}
                p={4}
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"end"}
                  mb={4}
                >
                  <Button
                    px={4}
                    borderRadius={24}
                    textTransform={"capitalize"}
                    overflowX={"hidden"}
                    maxW={320}
                  >
                    {project.title}
                  </Button>
                  <Box>
                    <Button
                      borderRadius={24}
                      p={0}
                      colorScheme="red"
                      variant={"ghost"}
                      size="sm"
                      mr={2}
                      onClick={() => deleteProject(project.id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      borderRadius={24}
                      p={0}
                      colorScheme="blue"
                      variant={"ghost"}
                      size="sm"
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                </Box>

                <Box my={2}>
                  <Text>{project.desc}</Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}
