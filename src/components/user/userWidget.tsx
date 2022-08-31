import { ArrowLeftIcon, AtSignIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useDisclosure,
  Link,
  Flex,
  DrawerHeader,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { User } from "../../types/types";

type UsernameWidgetProps = {
  user?: User;
};

const UsernameWidget: React.FC<UsernameWidgetProps> = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <Heading
        fontSize={["2xl", "2xl", "1xl", "1xl", "2xl"]}
        display={["none", "none", "flex", "flex", "flex"]}
        letterSpacing="tight"
        mt={2}
        mx={3}
      >
        {user?.username}
      </Heading>
      <Circle size="40px" bg="red.100" color="white">
        <Show above="sm">
          <Menu>
            <MenuButton
              as={AtSignIcon}
              aria-label="Options"
              icon={<AtSignIcon />}
              variant="outline"
              fontSize="4xl"
              p={1}
            />
            <MenuList color="#2C5282">
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
              <MenuItem icon={<ArrowLeftIcon />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Show>
        <Show below="md">
          <Icon
            as={AtSignIcon}
            fontSize="4xl"
            p={1}
            ref={btnRef}
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="#fff" color="#2C5282">
              <DrawerCloseButton />
              <DrawerHeader />

              <DrawerBody>
                <Flex className="sidebar-items" py={2.5} px={2}>
                  <SettingsIcon />
                  <Link
                    _hover={{ textDecor: "none" }}
                    as={ReactLink}
                    to={"/settings"}
                    fontSize="2xl"
                    mt={-2}
                    mx={3}
                    onClick={onClose}
                  >
                    Settings
                  </Link>
                </Flex>
                <Flex className="sidebar-items" py={2.5} px={2}>
                  <ArrowLeftIcon />
                  <Link
                    _hover={{ textDecor: "none" }}
                    as={ReactLink}
                    to={"/logout"}
                    fontSize="2xl"
                    mt={-2}
                    mx={3}
                    onClick={onClose}
                  >
                    Logout
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
      </Circle>
    </>
  );
};

UsernameWidget.defaultProps = {
  user: { username: "Telegrace", email: "grace.lee@nbt.ag", profilePic: "" },
};

export default UsernameWidget;
