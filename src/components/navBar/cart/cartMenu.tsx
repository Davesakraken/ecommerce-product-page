export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";
  const cartEmptyStyles = "text-[15px] font-bold pb-6 text-blue-dark";

  // desktop layouts
  const containerLayout = "lg:w-[22.5rem] lg:h-[16rem] lg:translate-x-32";

  return (
    <div className={`absolute flex flex-col top-24 right-[1vw] w-[98vw] h-[20rem] ${containerLayout} ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      <div className={`flex items-center justify-center text-center flex-auto ${cartEmptyStyles}`}>Your cart is empty.</div>
    </div>
  );
}
