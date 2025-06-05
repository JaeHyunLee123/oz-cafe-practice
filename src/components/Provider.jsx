import { CartProvider } from "../context/cartContext";
import { MenuProvider } from "../context/menuContext";

export default function Provider({ children }) {
  return (
    <MenuProvider>
      <CartProvider>{children}</CartProvider>
    </MenuProvider>
  );
}
