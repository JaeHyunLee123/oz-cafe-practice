/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);

  return <menuContext value={[menu, setMenu]}>{children}</menuContext>;
}

export function useMenuContext() {
  return useContext(menuContext);
}
