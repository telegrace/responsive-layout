import { Box, Flex } from "@chakra-ui/react";
import ContentLayout from "./ContentLayout";
import SidebarMenu from "./SidebarMenu";
import TopNavigationComponent from "./TopNavigation";

type DashboardLayoutProps = {};

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <Flex w="100vw" h="100%" flexDir={["column", "column", "row"]}>
      <Flex
        w={["100%", "100%", "10%", "20%", "20%"]}
        h={[null, null, "100vh"]}
        flexDir="column"
        alignItems="center"
        bg="red.100"
        display={["none", "none", "block", "block"]}
      >
        <SidebarMenu />
      </Flex>
      <Flex bg="blue.100" w="100%" flexDir="column">
        <TopNavigationComponent />
        <ContentLayout />
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
