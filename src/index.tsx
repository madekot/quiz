import {ChakraProvider, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'green',
  }),
  withDefaultColorScheme({
    colorScheme: 'gray',
    components: ['Table'],
  }),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
