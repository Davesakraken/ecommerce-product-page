import { useQuantity } from "@/context/quantityContext";

export default function QuantityControls() {
  const { quantity, incrementAmount, decrementAmount } = useQuantity();

  return (
    <div className="flex items-center justify-between w-40 h-12 bg-blue-light rounded-lg">
      <button onClick={decrementAmount} type="button">
        -
      </button>
      <p className="font-bold text-center text-black">{quantity}</p>
      <button onClick={incrementAmount} type="button">
        +
      </button>
    </div>
  );
}
