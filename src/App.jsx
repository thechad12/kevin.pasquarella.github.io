import './App.css';
import Main from './components/Main';
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
