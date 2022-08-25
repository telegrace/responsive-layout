import { ArrowLeftIcon, AtSignIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Circle,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { User } from "../../types/types";

type UsernameWidgetProps = {
  user?: User;
};

const UsernameWidget: React.FC<UsernameWidgetProps> = ({ user }) => {
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
      <Circle
        size="40px"
        bg="red.100"
        color="white"
        onClick={() => {
          console.log("show settings and logout");
        }}
      >
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
      </Circle>
    </>
  );
};

UsernameWidget.defaultProps = {
  user: { username: "Telegrace", email: "grace.lee@nbt.ag", profilePic: "" },
};

export default UsernameWidget;
