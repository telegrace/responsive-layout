import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // 2. Wrap ChakraProvider at the root of :your app
  return <ChakraProvider>{children}</ChakraProvider>;
}
