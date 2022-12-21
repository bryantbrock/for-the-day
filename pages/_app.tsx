import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

function MyApp({
  Component,
  pageProps,
}: {
  Component: FunctionComponent;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
