import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import ContentLayout from "./ContentLayout";
import SidebarMenu from "./SidebarMenu";
import TopNavigationComponent from "./TopNavigation";

type DashboardLayoutProps = { children: ReactNode };

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Flex w="100vw" h="100vh" flexDir={["column", "column", "row"]}>
      <Flex
        w={["100%", "100%", "10%", "20%", "20%"]}
        h={[null, null, "100vh"]}
        flexDir="column"
        alignItems="center"
        display={["none", "none", "block", "block"]}
      >
        <SidebarMenu />
      </Flex>
      <Flex bg="blue.100" w="100%" flexDir="column">
        <TopNavigationComponent />
        <ContentLayout>{children}</ContentLayout>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
