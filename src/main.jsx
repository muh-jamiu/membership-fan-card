import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "Acsl2_Q9Lwqdftf_OsAfrQjaK6_kjl3bgg64uQxGxGAoeoP08nHYFzhanWrPQl_i0tBApXLAz9IVKLw2",
  currency: "USD",
  intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

  <PayPalScriptProvider options={initialOptions}>
      <App />
  </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
