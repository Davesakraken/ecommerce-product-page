import { useCart } from "@/hooks/cartContext";

export default function CartNotification() {
  const { products } = useCart();

  if (!products) return;

  return (
    <div className="relative top-[-9px] left-[48px] lg:left-[77px] lg:top-[-9px] text-center  w-[18px] h-[13px] rounded-xl bg-orange-default select-none">
      <p className="text-white font-bold text-[9px]">{products}</p>
    </div>
  );
}
