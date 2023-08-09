import PictureGallery from "@/components/pictureGallery/pictureGallery";
import { CloseIcon } from "@/components/svgs";

interface props {
  closeLightbox: () => void;
}

export default function LightBox({ closeLightbox }: props) {
  return (
    <div>
      <div className="absolute top-[12vh] right-[32.5vw] z-10">
        <div onClick={closeLightbox} className="flex justify-end pb-3">
          <CloseIcon additionalClassNames=" text-white w-10 h-10" viewBox="0 0 5 23" />
        </div>
        <PictureGallery
          width="w-[35rem]"
          thumbnails={true}
          thumbnailWidth="w-24"
          thumbnailGroupProperties="justify-center gap-7 mt-9"
          navArrows={true}
          positionLeft="left-[-1.7rem]"
          positionRight="right-[-1.7rem]"
        />
      </div>
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-transparentBlack"></div>;
    </div>
  );
}
