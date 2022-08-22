import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

type ContentLayoutProps = {
  children?: React.ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <>
      <VStack spacing={3}>
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            Grace
          </Flex>
        </Heading>
        {children}
      </VStack>
    </>
  );
};

export default ContentLayout;
