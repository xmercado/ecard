import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, CssBaseline} from '@mui/material';

const theme = createTheme({
  palette: {
     primary: {
      main: '#D3D3D3',
     },
     secondary: {
      main: '#000000',
     },
     background: {
       default: '#EBF9FF',
     }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a
        href='https://github.com/xmercado'
        style={{
          textDecoration: 'none',
          color: '#c92020',
          padding: '10px'
        }}
      >
      by Xavier Mercado
      </a>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();