import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider, initialState, bookTableReducer } from './ContextApi/MyContext';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'
import { Slide } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={bookTableReducer}>
      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
        TransitionComponent={Slide} maxSnack={3}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </StoreProvider>
  </React.StrictMode>
);
reportWebVitals();