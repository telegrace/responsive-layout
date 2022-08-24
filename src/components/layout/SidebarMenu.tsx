import { Flex, Icon, Link } from "@chakra-ui/react";
// import { FiBell, FiFolder, FiHelpCircle, FiSettings } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import sidebarLinks from "../../data/sidebar-links.json";
import LogoComponent from "./LogoComponent";

type SidebarMenuProps = {};

// const icons = {
//   overview: FiFolder,
//   assets: FiFolder,
//   devices: FiFolder,
//   notifications: FiBell,
//   projects: FiFolder,
//   customers: FiFolder,
//   clients: FiFolder,
//   settings: FiSettings,
//   help: FiHelpCircle,
// };

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  return (
    <Flex flexDir="column" h={[null, null, "100vh"]}>
      <Flex flexDir="column" bg="#2C5282" color="#fff">
        <LogoComponent />
        <Flex
          flexDir="column"
          as="nav"
          h="100vh"
          p={[0, 0, 10, 10, 10]}
          alignItems={["center", "center", "center", "start", "start"]}
        >
          {sidebarLinks.map((link, i) => {
            // const LinkIcon = icons[link.icon as keyof typeof icons]; // components for the icon not working dynamically
            return (
              <Flex className="sidebar-items" key={i} p={2}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiFolder} fontSize="2xl" mr="3px" my="-3px" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                  as={ReactLink}
                  to={link.link}
                >
                  {link.title}
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

//projects, customers, clients need a hr above
//last two links to be at the bottom
