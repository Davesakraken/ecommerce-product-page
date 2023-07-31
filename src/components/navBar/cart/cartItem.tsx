import OrangeButton from "@/components/orangeButton";
import { DeleteIcon } from "@/components/svgs";
import ImgThumbnail from "@/assets/image-product-1-thumbnail.jpg";

export default function CartItem() {
  return (
    <>
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
        <OrangeButton text="Checkout" />
      </div>
    </>
  );
}
