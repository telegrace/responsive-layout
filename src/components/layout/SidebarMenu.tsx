import { Flex, Icon, Link } from "@chakra-ui/react";
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
import sidebarLinks from "../../data/sidebarLinks.json";
import LogoComponent from "./LogoComponent";

type SidebarMenuProps = {};

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

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  return (
    <Flex flexDir="column" h={[null, null, "100vh"]}>
      <Flex flexDir="column">
        <LogoComponent />
        <Flex flexDir="column" as="nav">
          {sidebarLinks.map((link, i) => {
            const LinkIcon = icons[link.icon as keyof typeof icons];
            // console.log("link.icon ", link.icon, " LinkIcon ", LinkIcon);
            return (
              <Flex className="sidebar-items" key={i} pb="10px">
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={LinkIcon} fontSize="2xl" mr="3px" my="-3px" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                  as={ReactLink}
                  to={link.link}
                >
                  {link.link}
                </Link>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SidebarMenu;
