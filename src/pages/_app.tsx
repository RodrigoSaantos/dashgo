import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme'
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/mirage/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
