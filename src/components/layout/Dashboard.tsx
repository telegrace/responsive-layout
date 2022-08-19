import React from "react";
import {
  Flex,
  Heading,
  Avatar,
  Text,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
} from "@chakra-ui/react";
import { FiCalendar, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navigation from "./Navigation";

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = (props) => {
  console.log(props);
  const [display, changeDisplay] = React.useState("hide");
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Navigation />
      {/* Column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            Grace
          </Flex>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default DashboardPage;
