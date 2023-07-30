import ImgThumbnail from "@/assets/image-product-1-thumbnail.jpg";
import OrangeButton from "@/components/orangeButton";
import { CartIcon, DeleteIcon } from "@/components/svgs";

export default function CartMenu() {
  // styles
  const containerStyles = "rounded-lg bg-white drop-shadow-2xl";
  const cartMenuHeaderStyles = "border-b font-bold h-16 pl-5";
  const cartEmptyStyles = "text-[15px] font-bold pb-6 text-blue-dark";

  // desktop layouts
  const containerLayout = "lg:w-[22.5rem] lg:h-[14.5rem] lg:translate-x-32";

  return (
    <div className={`absolute flex flex-col gap-5 top-24 right-[1vw] ${containerLayout} ${containerStyles}`}>
      <div className={`flex items-center ${cartMenuHeaderStyles}`}>Cart</div>
      <div className="flex justify-around items-center mx-3">
        <img src={ImgThumbnail} className="rounded-[4px] w-12 h-12" />
        <div className="leading-7">
          <p>
            Fall Limited Edition Sneakers <br /> $125.00 x 3 <span className="font-bold text-black">$375.00</span>
          </p>
        </div>
        <DeleteIcon classname="fill-current text-blue-grayish pt-[6px]" />
      </div>
      <div className="flex justify-center">
        <OrangeButton />
      </div>
    </div>
  );
}

// <div className={`flex items-center justify-center text-center flex-auto ${cartEmptyStyles}`}>Your cart is empty.</div>;
