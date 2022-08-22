import { Heading } from "@chakra-ui/react";

type LogoProps = {};

const LogoComponent: React.FC<LogoProps> = (props) => {
  console.log(props);
  return (
    <Heading
      m={"20px"}
      fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
      alignSelf="center"
      letterSpacing="tight"
    >
      ME Platform
    </Heading>
  );
};

export default LogoComponent;
