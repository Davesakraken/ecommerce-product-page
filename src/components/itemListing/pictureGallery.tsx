import { useState } from "react";

import ProductOne from "../../assets/image-product-1.jpg";
import ProductTwo from "../../assets/image-product-2.jpg";
import ProductThree from "../../assets/image-product-3.jpg";
import ProductFour from "../../assets/image-product-4.jpg";
import NavigationArrows from "../lightbox/navigationArrows";

interface props {
  width: string;
  thumbnailWidth: string;
  thumbnailGroupProperties?: string;
  gap?: string;
  navArrows?: boolean;
  openLightbox?: () => void;
}

export default function PictureGallery({ width, thumbnailWidth, thumbnailGroupProperties, gap, navArrows, openLightbox }: props) {
  const PreviewStyling = `cursor-pointer rounded-xl hover:opacity-50 mx-[.1rem] select-none  ${thumbnailWidth}`;
  const activeImage = `outline outline-2 outline-orange-default`;

  const [currentImage, setImage] = useState(ProductOne);

  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];

  const handleImageClick = (imageUrl: string) => {
    setImage(imageUrl);
  };

  const handleLightBoxArrows = (index: number) => {
    if (index >= images.length) {
      setImage(images[0]);
    } else if (index < 0) {
      setImage(images[images.length - 1]);
    } else {
      setImage(images[index]);
    }
  };

  return (
    <>
      <div className={`grid grid-col-1 justify-items-center ${gap} ${width}`}>
        {navArrows && <NavigationArrows handleClick={handleLightBoxArrows} currentIndex={images.indexOf(currentImage)} />}
        <img onClick={openLightbox} className="cursor-pointer select-none col-span-full mb-2 rounded-2xl" src={currentImage} />
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
