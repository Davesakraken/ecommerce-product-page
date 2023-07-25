import { useState } from "react";

export default function AddButton() {
  const [quantity, setQuantity] = useState(0);

  function incrementAmmount() {
    if (quantity === 99) return;

    setQuantity((q) => q + 1);
  }

  function decrementAmmount() {
    if (quantity === 0) return;
    setQuantity((q) => q - 1);
  }

  return (
    <div className="flex items-center justify-around w-36 h-12 bg-blue-light rounded-lg">
      <button onClick={decrementAmmount} type="button">
        -
      </button>
      <p className="font-bold text-center">{quantity}</p>
      <button onClick={incrementAmmount} type="button">
        +
      </button>
    </div>
  );
}
