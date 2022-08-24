import { Flex, Heading, Image } from "@chakra-ui/react";
import meLogo from "./../../assets/me_logo.svg";

type LogoProps = {};

const LogoComponent: React.FC<LogoProps> = (props) => {
  return (
    <Flex m={8} justifyContent="center">
      <Image
        src={meLogo}
        alt="Machine Economy Platform"
        p={[0, 0, 0, 3, 3]}
        mb={1.5}
      />
      <Heading
        fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
        alignSelf="center"
        letterSpacing="tight"
        display={["none", "none", "none", "flex", "flex"]}
      >
        ME Platform
      </Heading>
    </Flex>
  );
};

export default LogoComponent;
