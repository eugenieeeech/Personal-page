import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import CreateSnackbarProvider from './components/CreateSnackbarProvider';
import DialogProvider from './components/DialogProvider';

ReactDOM.render(
  <SnackbarProvider maxSnack={5}>
  <CreateSnackbarProvider>
    <DialogProvider>
      <App />
    </DialogProvider>
  </CreateSnackbarProvider>
</SnackbarProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
