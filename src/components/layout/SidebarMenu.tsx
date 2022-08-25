import {
  BellIcon,
  MinusIcon,
  QuestionOutlineIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import sidebarLinks from "../../data/sidebar-links.json";
import LogoComponent from "./LogoComponent";

type SidebarMenuProps = {};

const icons = {
  "/overview": <ViewIcon />,
  "/assets": <MinusIcon />,
  "/devices": <MinusIcon />,
  "/notifications": <BellIcon />,
  "/projects": <MinusIcon />,
  "/customers": <MinusIcon />,
  "/clients": <MinusIcon />,
  "/settings": <SettingsIcon />,
  "/help": <QuestionOutlineIcon />,
};

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" bg="#2C5282" color="#fff" h="100vh">
        <LogoComponent />
        <Flex
          flexDir="column"
          as="nav"
          p={[0, 0, 10, 10, 10]}
          alignItems={["center", "center", "center", "start", "start"]}
        >
          {sidebarLinks.map((link, i) => {
            return (
              <Flex className="sidebar-items" key={i} p={2}>
                <>
                  {icons[link.link as keyof typeof icons]}
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                    as={ReactLink}
                    to={link.link}
                    fontSize="2xl"
                  >
                    {link.title}
                  </Link>
                </>
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
