import {
  Box,
  Button,
  Center,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,

} from "@chakra-ui/react";
import { useState } from "react";
import AddProject from "./AddProject";
import ProjectTable from "./ProjectTable";

export default function Admin({data}) {


  return (
    <>
      <Box bg={"blackAlpha.50"}>
        <Container maxW={"8xl"}>
          <Box>
            <Tabs variant="soft-rounded" colorScheme="green" py={8}>
              <TabList>
                <Tab>All Project</Tab>
                <Tab>Add Project</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ProjectTable data={data} />
                </TabPanel>
                <TabPanel>
                  <AddProject />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </>
  );
}
