import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme/chakra";
import "../styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Autoplay } from "swiper";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useAlertStore } from "@/store/alertStore";

SwiperCore.use([Autoplay]);

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  const { status, message, reset } = useAlertStore();

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (status || message) {
      timeout = setTimeout(reset, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [status, message, reset]);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {status && (
          <Alert variant="solid" status={status}>
            <AlertIcon />
            {message}
          </Alert>
        )}
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
