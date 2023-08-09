import CartItem from "@/components/navBar/cart/cartItem";
import CartEmpty from "./cartEmpty";
import { useCart } from "@/hooks/cartContext";

export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";

  // layouts
  const DesktopLayout = "lg:h-[15rem] lg:left-[-20rem] lg:w-[22.5rem] lg:h-[14.5rem] lg:translate-x-32 lg:right-0 lg:top-24";

  const { products } = useCart();

  return (
    <div className={`absolute flex flex-col gap-5 left-[2vw] top-20 w-[95vw] h-[20rem] z-30  ${DesktopLayout} ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      {!products ? <CartEmpty /> : <CartItem />}
    </div>
  );
}
