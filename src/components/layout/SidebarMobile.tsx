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
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </>
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
