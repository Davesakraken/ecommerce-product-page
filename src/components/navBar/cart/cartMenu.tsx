import CartItem from "@/components/navBar/cart/cartItem";
import CartEmpty from "./cartEmpty";
import { useCart } from "@/context/cartContext";

export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";

  // desktop layouts
  const containerLayout = "lg:w-[22.5rem] lg:h-[14.5rem] lg:translate-x-32";

  const { products } = useCart();

  return (
    <div className={`absolute flex flex-col gap-5 top-24 right-0 w-[100vw] h-[20rem]  ${containerLayout} ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      {!products ? <CartEmpty /> : <CartItem />}
    </div>
  );
}
