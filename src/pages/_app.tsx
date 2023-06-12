import { Alert, AlertIcon, ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme/chakra";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useAlertStore } from "@/store/alertStore";
import { useRouter } from "next/router";
import { checkAdminAuthentication } from "../middleware/adminAuthMiddleware";
import { UseAdminAuthStore } from "@/store/adminStore";

export default function App({ Component, pageProps }: AppProps) {
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

  const router = useRouter();
  const isAdminAuthenticated = UseAdminAuthStore(
    (state) => state.isAuthenticated
  );
  useEffect(() => {
    const checkAuthentication = async () => {
      if (router.pathname.startsWith("/admin")) {
        const authenticated = await checkAdminAuthentication(
          isAdminAuthenticated
        ); // Passe o estado como argumento para a função
        if (!authenticated) {
          // Verifique se o usuário não está autenticado como administrador
          router.push("/login");
        }
      }
    };

    checkAuthentication();
  }, [router, isAdminAuthenticated]);

  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        {status && (
          <div className="sticky top-0 z-50">
            <Alert variant="solid" status={status}>
              <AlertIcon />
              {message}
            </Alert>
          </div>
        )}
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
