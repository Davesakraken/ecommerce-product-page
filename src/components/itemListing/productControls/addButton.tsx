import { CartIcon } from "../../svgs";

export default function QuantityControls() {
  return (
    <div className="flex items-center justify-center gap-2 w-60 h-12 bg-orange-default rounded-lg cursor-pointer hover:shadow-lg hover:shadow-orange-default ">
      <CartIcon viewBox="0 -5 22 30" classname="fill-current text-white" />
      <p className="text-white font-bold text-[13px]">Add to cart</p>
    </div>
  );
}
