import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  BellIcon,
  MinusIcon,
  QuestionOutlineIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import LogoComponent from "./LogoComponent";
import sidebarLinks from "../../data/sidebar-links.json";

import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {};

const icons = {
  overview: ViewIcon,
  assets: MinusIcon,
  devices: MinusIcon,
  notifications: BellIcon,
  projects: MinusIcon,
  customers: MinusIcon,
  clients: MinusIcon,
  settings: SettingsIcon,
  help: QuestionOutlineIcon,
};

const SidebarMobile: React.FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Icon
        as={HamburgerIcon}
        fontSize="4xl"
        p={1}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#2C5282" color="#fff">
          <DrawerCloseButton />
          <DrawerHeader>
            <LogoComponent />
          </DrawerHeader>

          <DrawerBody>
            {sidebarLinks.map((link, i) => {
              const LinkIcon = icons[link.icon as keyof typeof icons]; // components for the icon not working dynamically
              return (
                <Flex className="sidebar-items" key={i} p={2}>
                  <Link>
                    <Icon as={LinkIcon} fontSize="2xl" mr="3px" my="-3px" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    as={ReactLink}
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                </Flex>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMobile;
