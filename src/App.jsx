import './App.css';
import Main from '../src/components/Main';
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={DarkMode}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
