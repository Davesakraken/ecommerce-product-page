export default function CartEmpty() {
  const cartEmptyStyles = "text-[15px] font-bold pb-10 text-blue-dark";
  return <div className={`flex items-center justify-center text-center flex-auto ${cartEmptyStyles}`}>Your cart is empty.</div>;
}
