import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme/chakra";

export default function App({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
