import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PayPalScriptProvider 
      options={{
        clientId:"id del cliente"
      }}
      >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
