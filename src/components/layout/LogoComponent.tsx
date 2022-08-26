import { Flex, Heading, Image } from "@chakra-ui/react";
import meLogo from "./../../assets/me_logo.svg";

type LogoProps = {};

const LogoComponent: React.FC<LogoProps> = (props) => {
  return (
    <Flex m={8} justifyContent="center">
      <Image src={meLogo} alt="Machine Economy Platform" padding={1} />
      <Heading
        fontSize={["3xl", "4xl", "2xl", "3xl", "4xl"]}
        alignSelf="center"
        letterSpacing="tight"
        display={["flex", "none", "none", "flex", "flex"]}
        mb={-2}
      >
        ME Platform
      </Heading>
    </Flex>
  );
};

export default LogoComponent;
