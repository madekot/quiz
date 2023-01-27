import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme, withDefaultColorScheme} from '@chakra-ui/react'
import './index.module.scss'
import {App} from './components/App'
import {Provider} from 'react-redux'
import {store} from './store'

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
