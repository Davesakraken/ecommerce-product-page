import { useState } from "react";

import ProductOne from "../../assets/image-product-1.jpg";
import ProductTwo from "../../assets/image-product-2.jpg";
import ProductThree from "../../assets/image-product-3.jpg";
import ProductFour from "../../assets/image-product-4.jpg";

interface props {
  width: string;
  thumbnailWidth: string;
  thumbnailGroupProperties?: string;
  gap?: string;
  navArrows?: boolean;
}

export default function PictureGallery({ width, thumbnailWidth, thumbnailGroupProperties, gap }: props) {
  const PreviewStyling = `cursor-pointer rounded-xl hover:opacity-50 mx-[.1rem]  ${thumbnailWidth}`;
  const activeImage = `outline outline-2 outline-orange-default`;

  const [currentImage, setImage] = useState(ProductOne);

  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];

  const handleImageClick = (imageUrl: string) => {
    setImage(imageUrl);
  };

  return (
    <>
      <div className={`grid grid-col-1 justify-items-center ${gap} ${width}`}>
        <img className="col-span-full mb-2 rounded-2xl" src={currentImage} />
        <div className={`flex ${thumbnailGroupProperties} ${width}`}>
          {images.map((i) => (
            <img
              key={i}
              onClick={() => handleImageClick(i)}
              className={`${currentImage === i ? activeImage : ""} ${PreviewStyling}`}
              src={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
