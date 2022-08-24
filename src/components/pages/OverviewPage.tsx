import { Flex, Heading } from "@chakra-ui/react";

type OverviewProps = {};

const OverviewPage: React.FC<OverviewProps> = (props) => {
  console.log(props);
  return (
    <Heading fontWeight="normal" mb={4} letterSpacing="tight">
      Welcome back,{" "}
      <Flex display="inline-flex" fontWeight="bold">
        Grace
      </Flex>
    </Heading>
  );
};
export default OverviewPage;
