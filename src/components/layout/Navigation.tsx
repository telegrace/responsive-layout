import { Flex, Heading, Icon, Link } from "@chakra-ui/react";
import {
  FiAward,
  FiBell,
  FiCalendar,
  FiEye,
  FiGrid,
  FiHelpCircle,
  FiPackage,
  FiRadio,
  FiSettings,
  FiSmile,
  FiUsers,
} from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import sidebarLinks from "./../../data/sidebarLinks.json";

interface NavigationProps {}

const icons = {
  "/overview": FiEye,
  "/ventures": FiGrid,
  "/venture-customers": FiSmile,
  "/projects": FiAward,
  "/project-customers": FiUsers,
  "/assets": FiRadio,
  "/devices": FiPackage,
  "/events": FiCalendar,
  "/notifications": FiBell,
  "/settings": FiSettings,
  "/help": FiHelpCircle,
};

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <Flex
      w={["100%", "100%", "10%", "20%", "20%"]}
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex
        flexDir="column"
        h={[null, null, "100vh"]}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
            display={["none", "none", "none", "block"]}
          >
            ME platform
          </Heading>
          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
            display={["block", "block", "block", "none"]}
          >
            ME
          </Heading>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            {sidebarLinks.map((link, i) => {
              const LinkIcon = icons[link.icon as keyof typeof icons];
              console.log(LinkIcon);
              return (
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  key={i}
                  pb="10px"
                >
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon
                      as={LinkIcon}
                      fontSize="2xl"
                      className="active-icon"
                      mr="3px"
                      my="-3px"
                    />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    <ReactLink to={link.link}>{link.title}</ReactLink>
                  </Link>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
