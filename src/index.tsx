import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './Router/AppRouter';
import {ChakraProvider, ColorModeScript, extendTheme} from '@chakra-ui/react'
import { Global } from '@emotion/react';
import MuiThemeWrapper from './helpers/MuiThemeWrapper';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const theme = extendTheme({
  fonts:{
    heading:`'digital'`,
    body:`'digital'`,
  },
  initialColorMode:'light',
  useSystemColorMode:true,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <MuiThemeWrapper>
      <ChakraProvider theme={theme}>
    <Global
    styles={`
    @font-face {
      font-family:digital;
      font-style: normal;
      font-weight: normal;
      src: url('./fonts/digital.ttf');
    }
    `}
    />
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <AppRouter />
  </ChakraProvider>
    </MuiThemeWrapper>
    </Provider>


);


