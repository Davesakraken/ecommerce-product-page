import { CartIcon } from "@/components/svgs";

export default function QuantityControls() {
  return (
    <div className="flex items-center justify-center gap-2 w-60 h-12 select-none bg-orange-default rounded-lg cursor-pointer shadow-md shadow-orange-pale">
      <CartIcon viewBox="0 -5 25 30" classname="fill-current text-white" />
      <p className="text-white font-bold text-[13px]">Add to cart</p>
    </div>
  );
}
