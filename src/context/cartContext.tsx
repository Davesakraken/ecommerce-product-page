// 1-8 setup: sets up the context.
import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

interface CartContextInterface {
  products: number;
  setProducts: Dispatch<SetStateAction<CartContextInterface["products"]>>;
  addToCart: (amount: number) => void;
}

export const CartContext = createContext<CartContextInterface | null>(null);

/**
 * A Hook function that returns cart context.
 * @returns {CartContextInterface}
 */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new TypeError("error: useCart called out of context");
  }
  return ctx;
}

interface CartProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState(0);

  const addToCart = (amount: number) => {
    setProducts(products + amount);
  };

  return <CartContext.Provider value={{ products, setProducts, addToCart }}>{children}</CartContext.Provider>;
}
