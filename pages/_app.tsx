import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ProvideAuth } from '../hooks/useAuth'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  </ChakraProvider>
}
