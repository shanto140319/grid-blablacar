import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const muiTheme = createMuiTheme({
  typography: {
    body1: {
      fontSize: '14px',
      marginBottom: '10px',
      color: '#0B4749',
      '@media (min-width:800px)': {
        fontSize: '16px',
      },
    },
    caption: {
      fontSize: '14px',
      marginBottom: '16px',
      fontWeight: 500,
      '@media (min-width:800px)': {
        fontSize: '16px',
      },
    },
    button: {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '32px',
      color: '#0B4749',
      textTransform: 'capitalize',
      fontWeight: 600,
    },

    h4: {
      fontSize: '22px',
      color: '#0B4749',
      marginBottom: '.5rem',
      textTransform: 'capitalize',
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      color: '#0B4749',
      textTransform: 'capitalize',
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: '#bceebd' },
    secondary: { main: '#F1C837' },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '5px',
      },
      contained: {
        WebkitBoxShadow: 'none',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
