import ProductOne from "../../assets/image-product-1.jpg";
import ProductTwo from "../../assets/image-product-2.jpg";
import ProductThree from "../../assets/image-product-3.jpg";
import ProductFour from "../../assets/image-product-4.jpg";

export default function PictureGallery() {
  return (
    <main>
      <div className="grid grid-cols-4">
        <img className="col-span-full rounded-2xl mb-7" src={ProductOne} width={448} alt="" />
        <img className="rounded-xl" src={ProductOne} width={88} alt="" />
        <img className="rounded-xl" src={ProductTwo} width={88} alt="" />
        <img className="rounded-xl" src={ProductThree} width={88} alt="" />
        <img className="rounded-xl" src={ProductFour} width={88} alt="" />
      </div>

      <div className="flex w-[100vw]"></div>
    </main>
  );
}
