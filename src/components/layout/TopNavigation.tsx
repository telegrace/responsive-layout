import React from "react";
import { Flex, Heading, HStack } from "@chakra-ui/react";
import sidebarLinks from "./../../data/sidebar-links.json";
import { useLocation } from "react-router-dom";
type TopNavigationProps = {};

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
  let location = useLocation();
  const [pageName, setPageName] = React.useState<string>("Overview");

  React.useEffect(() => {
    console.log("location.pathname ", location.pathname);
    let linkObj = sidebarLinks.filter((link) => link.link == location.pathname);
    setPageName(linkObj[0].title);
    //swap key and values for sidebar-link if there is performance issue
  }, [location, pageName]);
  return (
    <HStack m={[4, 4, 8, 8, 8]} spacing="auto">
      <Heading
        fontSize={["2xl", "2xl", "2xl", "3xl", "4xl"]}
        letterSpacing="tight"
        mt={1}
      >
        {pageName}
      </Heading>
      <Flex>
        <Heading
          fontSize={["2xl", "2xl", "1xl", "1xl", "2xl"]}
          letterSpacing="tight"
          mt={1}
        >
          Username
        </Heading>
        <Heading
          fontSize={["2xl", "2xl", "1xl", "1xl", "2xl"]}
          letterSpacing="tight"
          mt={1}
          onClick={() => {
            console.log("show settings and logout");
          }}
        >
          user pic
        </Heading>
      </Flex>
    </HStack>
  );
};

export default TopNavigation;
