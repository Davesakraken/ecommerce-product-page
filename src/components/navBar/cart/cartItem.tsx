import OrangeButton from "@/components/orangeButton";
import { DeleteIcon } from "@/components/svgs";
import ImgThumbnail from "@/assets/image-product-1-thumbnail.jpg";
import { useCart } from "@/context/cartContext";

export default function CartItem() {
  const { products, setProducts } = useCart();

  const total = 125 * products;

  const cartItemGoByeBye = () => {
    setProducts(0);
  };

  return (
    <>
      <div className="flex justify-around items-center mx-3">
        <img src={ImgThumbnail} className="rounded-[4px] w-12 h-12" />
        <div className="leading-7">
          <p>
            Fall Limited Edition Sneakers <br /> $125.00 x {products} <span className="font-bold text-black">${total}.00</span>
          </p>
        </div>
        <DeleteIcon onClick={cartItemGoByeBye} classname="fill-current text-blue-grayish pt-[6px]" />
      </div>
      <div className="flex justify-center">
        <OrangeButton
          onClick={() => {
            ("");
          }}
          text="Checkout"
        />
      </div>
    </>
  );
}
