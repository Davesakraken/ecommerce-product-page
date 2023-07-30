import { useState } from "react";

export default function CartNotification() {
  const [quantity, setquantity] = useState(0);

  if (!quantity) return;

  return (
    <div className="absolute top-[38px] text-center left-[10px] w-[18px] h-[13px] rounded-xl bg-orange-default select-none">
      <p className="text-white font-bold text-[9px]">{quantity}</p>
    </div>
  );
}
