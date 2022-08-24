import { Circle, Heading, Icon } from "@chakra-ui/react";
import { FiSmile } from "react-icons/fi";
import { User } from "../../types/types";

type UsernameWidgetProps = {
  user?: User;
};

const UsernameWidget: React.FC<UsernameWidgetProps> = ({ user }) => {
  return (
    <>
      <Heading
        fontSize={["2xl", "2xl", "1xl", "1xl", "2xl"]}
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
        <Icon as={FiSmile} fontSize="4xl" p={1} />
      </Circle>
    </>
  );
};

UsernameWidget.defaultProps = {
  user: { username: "Telegrace", email: "grace.lee@nbt.ag", profilePic: "" },
};

export default UsernameWidget;
