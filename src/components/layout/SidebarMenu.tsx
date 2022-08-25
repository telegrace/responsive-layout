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
  "/overview": <ViewIcon fontSize="2xl" />,
  "/assets": <MinusIcon fontSize="2xl" />,
  "/devices": <MinusIcon fontSize="2xl" />,
  "/notifications": <BellIcon fontSize="2xl" />,
  "/projects": <MinusIcon fontSize="2xl" />,
  "/customers": <MinusIcon fontSize="2xl" />,
  "/clients": <MinusIcon fontSize="2xl" />,
  "/settings": <SettingsIcon fontSize="2xl" />,
  "/help": <QuestionOutlineIcon fontSize="2xl" />,
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
              <Flex className="sidebar-items" key={i} py={2.5} px={2}>
                <>
                  {icons[link.link as keyof typeof icons]}
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                    as={ReactLink}
                    to={link.link}
                    fontSize="2xl"
                    mt={-0.5}
                    mx={3}
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
