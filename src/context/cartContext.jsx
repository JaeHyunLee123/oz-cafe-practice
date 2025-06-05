/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <menuContext value={[cart, setCart]}>{children}</menuContext>;
}

export function useMenuContext() {
  return useContext(cartContext);
}
