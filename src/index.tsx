import {App} from './components/App'
// import {store} from './store'

import {ChakraProvider, extendTheme, withDefaultColorScheme} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.scss'
// import {Provider} from 'react-redux'

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'green',
  }),
  withDefaultColorScheme({
    colorScheme: 'gray',
    components: ['Table'],
  })
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    {/*</Provider>*/}
  </React.StrictMode>
)
