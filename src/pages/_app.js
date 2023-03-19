import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme/theme";
import PalletContext from "@/context/PalletCotext";

export default function App({ Component, pageProps }) {
  return (
    <PalletContext>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
    </PalletContext>
  )
}
