import { useCart } from "@/context/cartContext";

export default function CartNotification() {
  const { products } = useCart();

  if (!products) return;

  return (
    <div className="absolute top-[38px] text-center left-[10px] w-[18px] h-[13px] rounded-xl bg-orange-default select-none">
      <p className="text-white font-bold text-[9px]">{products}</p>
    </div>
  );
}
