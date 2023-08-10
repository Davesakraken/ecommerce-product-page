import CartItem from "@/components/navBar/cart/cartItem";
import CartEmpty from "./cartEmpty";
import { useCart } from "@/hooks/cartContext";

export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";

  // layouts
  const DesktopLayout = "lg:absolute lg:h-[15rem] lg:w-[22.5rem] lg:h-[14.5rem] lg:top-24 lg:left-[-15rem] 2xl:left-[-10rem]";

  const { products } = useCart();

  return (
    <div className={`absolute flex flex-col gap-5 left-[5vw] top-20 w-[90vw] h-[17rem] z-30 ${DesktopLayout} ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      {!products ? <CartEmpty /> : <CartItem />}
    </div>
  );
}
