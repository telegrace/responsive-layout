import React from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/react";
import sidebarLinks from "./../../data/sidebar-links.json";
import { useLocation } from "react-router-dom";
import UsernameWidget from "../user/userWidget";
import BasicDrawerComponent from "./SidebarMobile";

type TopNavigationProps = {};

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
  let location = useLocation();
  const [pageName, setPageName] = React.useState<string>("Overview");

  React.useEffect(() => {
    let linkObj = sidebarLinks.filter(
      (link) => link.link === location.pathname
    );
    if (linkObj.length) {
      setPageName(linkObj[0].title);
    } else {
      setPageName("Oops!");
    }
    //swap key and values for sidebar-link if there is performance issue
  }, [location, pageName]);

  return (
    <Flex m={[4, 4, 8, 8, 8]} mt={[3, 3, 6]}>
      <Flex display={["flex", "flex", "none", "none", "none"]}>
        <BasicDrawerComponent />
        <Spacer />
      </Flex>
      <Heading
        fontSize={["2xl", "2xl", "2xl", "3xl", "4xl"]}
        letterSpacing="tight"
        mt={1}
      >
        {pageName}
      </Heading>
      <Spacer />
      <Flex>
        <UsernameWidget />
      </Flex>
    </Flex>
  );
};

export default TopNavigation;
