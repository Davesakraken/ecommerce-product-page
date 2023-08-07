// 1-8 setup: sets up the context.
import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

interface QuantityContextInterface {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<QuantityContextInterface["quantity"]>>;
  incrementAmount: () => void;
  decrementAmount: () => void;
}

export const QuantityContext = createContext<QuantityContextInterface | null>(null);

/**
 * A Hook function that returns quantity context.
 * @returns {QuantityContextInterface}
 */
export function useQuantity() {
  const ctx = useContext(QuantityContext);
  if (!ctx) {
    throw new TypeError("error: useQuantity called out of context");
  }
  return ctx;
}

interface QuantityProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function QuantityProvider({ children }: QuantityProviderProps) {
  const [quantity, setQuantity] = useState(1);

  function incrementAmount() {
    if (quantity === 99) return;
    setQuantity((q) => q + 1);
  }

  function decrementAmount() {
    if (quantity === 1) return;
    setQuantity((q) => q - 1);
  }

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity, incrementAmount, decrementAmount }}>{children}</QuantityContext.Provider>
  );
}
