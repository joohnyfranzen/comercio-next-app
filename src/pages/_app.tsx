import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme/chakra";
import "../styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Autoplay } from "swiper";
import { SessionProvider } from "next-auth/react";

SwiperCore.use([Autoplay]);

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
