import PictureGallery from "@/components/pictureGallery/pictureGallery";
import { CloseIcon } from "@/components/svgs";
import { useIsLightbox } from "@/hooks/MediaQuerys";

interface props {
  closeLightbox: () => void;
}

export default function LightBox({ closeLightbox }: props) {
  const isLightBox = useIsLightbox();
  if (isLightBox) return;
  return (
    <div>
      <div className="absolute top-[10%] right-[35%] z-10">
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
