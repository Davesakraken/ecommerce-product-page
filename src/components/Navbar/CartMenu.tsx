export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";
  const cartEmptyStyles = "text-[15px] font-bold pb-6 text-blue-dark";

  return (
    <div className={`absolute flex flex-col w-[22.5rem] h-[16rem] top-24 right-0 translate-x-5 lg:translate-x-20 ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      <div className={`flex items-center justify-center text-center flex-auto ${cartEmptyStyles}`}>Your cart is empty.</div>
    </div>
  );
}
