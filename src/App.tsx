import NavBar from './components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';

import './App.css';
import { ShoppingCartContext } from './providers/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {ReactPayPalScriptOptions} from  '@paypal/react-paypal-js';
import { FooterMinimalist } from './components/FooterMinimalist/FooterMinimalist';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { NavBarReact } from './components/NavBar/NavBarReact';



const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const ppInitialOptions = {
  clientId: "test",
  currency: "MXN",
  intent: "capture"
};

function App() {
  const [productList, setProductList] = useState([]);

  // Obtiene el carrito de compras SI existe en la bodega
  useEffect(() => {
    const result = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (result) {
      setProductList(result);
    }
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const color = useTransform(scrollYProgress, [0, 1], ["#FFFFFF", "#000"]);

  return (
    <PayPalScriptProvider options={ppInitialOptions} >
      <ShoppingCartContext.Provider value={{
        productList,
        setProductList
      }}><motion.div
      style={{
        background: color,
        height: "495vh",
      }}
         >
          <div className="app">
            <NavBarReact />
            <RouterProvider router={router} />
            <FooterMinimalist/>
          </div>
        </motion.div>
      </ShoppingCartContext.Provider>
    </PayPalScriptProvider>  
  );
}

export default App;
