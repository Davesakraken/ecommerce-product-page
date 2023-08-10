import { useState } from "react";

import ProductOne from "@/assets/image-product-1.jpg";
import ProductTwo from "@/assets/image-product-2.jpg";
import ProductThree from "@/assets/image-product-3.jpg";
import ProductFour from "@/assets/image-product-4.jpg";
import NavigationArrows from "@/components/pictureGallery/navigationArrows";

interface props {
  // GalleryProps
  width: string;
  thumbnails: boolean;
  thumbnailWidth?: string;
  thumbnailGroupProperties?: string;
  gap?: string;
  // navigationarrowProps
  navArrows: boolean;
  positionLeft?: string;
  positionRight?: string;
  // lightboxProps
  openLightbox?: () => void;
}

export default function PictureGallery({
  width,
  thumbnails,
  thumbnailWidth,
  thumbnailGroupProperties,
  gap,
  navArrows,
  positionLeft,
  positionRight,
  openLightbox,
}: props) {
  const PreviewStyling = `cursor-pointer bg-white rounded-xl mx-[.1rem] select-none ${thumbnailWidth}`;
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
      <div className={`grid grid-col-1 justify-items-center relative ${gap} ${width}`}>
        {navArrows && (
          <NavigationArrows
            handleClick={handleLightBoxArrows}
            currentIndex={images.indexOf(currentImage)}
            positionLeft={positionLeft}
            positionRight={positionRight}
          />
        )}
        <img
          onClick={openLightbox}
          className="object-cover w-full h-[20rem] sm:h-auto cursor-pointer select-none col-span-full mb-2 sm:rounded-2xl"
          src={currentImage}
        />
        {thumbnails && (
          <div className={`flex ${thumbnailGroupProperties} ${width}`}>
            {images.map((i) => (
              <div key={i} className="relative">
                <div
                  onClick={() => handleImageClick(i)}
                  className={`absolute inset-0 bg-white opacity-0 hover:opacity-50 ${PreviewStyling}`}
                ></div>
                <img className={`${currentImage === i ? activeImage : ""} ${PreviewStyling}`} src={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
