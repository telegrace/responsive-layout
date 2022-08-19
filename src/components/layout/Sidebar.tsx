import { Box } from "@chakra-ui/react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <Box bg="red.200" w={[300, 400, 500]}>
        This is a box
      </Box>
    </>
  );
};

export default Sidebar;
