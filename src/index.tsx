import {App} from './App';
// import {store} from './store'

import {ChakraProvider, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux'

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
    {/*<Provider store={store}>*/}
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    {/*</Provider>*/}
  </React.StrictMode>,
);
