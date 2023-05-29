import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme/chakra";
import "../styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default function App({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
