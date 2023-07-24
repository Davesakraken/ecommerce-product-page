import { useState } from "react";

import ProductOne from "../../assets/image-product-1.jpg";
import ProductTwo from "../../assets/image-product-2.jpg";
import ProductThree from "../../assets/image-product-3.jpg";
import ProductFour from "../../assets/image-product-4.jpg";

export default function PictureGallery() {
  const PreviewStyling = "cursor-pointer rounded-xl hover:opacity-50 hover:outline outline-2 outline-orange-default";

  const [currentImage, setImage] = useState(ProductOne);

  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];

  const handleImageClick = (imageUrl: string) => {
    setImage(imageUrl);
  };

  return (
    <main>
      <div className="grid grid-cols-4 gap-7">
        <img className="col-span-full mb-2 rounded-2xl" src={currentImage} alt="" />
        {images.map((i) => (
          <img key={i} onClick={() => handleImageClick(i)} className={PreviewStyling} src={i} />
        ))}
      </div>
    </main>
  );
}
