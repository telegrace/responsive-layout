import { Flex, Heading } from "@chakra-ui/react";

type TopNavigationProps = {};

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
  return (
    <Flex bg="red.300" w="100%" h="5em">
      <Heading
        m={"20px"}
        fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
        alignSelf="center"
        letterSpacing="tight"
      >
        Page Name
      </Heading>
    </Flex>
  );
};

export default TopNavigation;
