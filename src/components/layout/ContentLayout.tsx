import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

type ContentLayoutProps = {
  children?: React.ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <>
      <VStack spacing={3}>{children}</VStack>
    </>
  );
};

export default ContentLayout;
