import { useCart } from "@/hooks/cartContext";

export default function CartNotification() {
  const { products } = useCart();

  if (!products) return;

  return (
    <div className="absolute left-3 top-5 lg:top-10 text-center  w-[18px] h-[13px] rounded-xl bg-orange-default select-none">
      <p className="text-white font-bold text-[9px]">{products}</p>
    </div>
  );
}
