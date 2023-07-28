import PictureGallery from "../itemListing/pictureGallery";
import { CloseIcon } from "../svgs";

interface props {
  closeLightbox: () => void;
}

export default function LightBox({ closeLightbox }: props) {
  return (
    <div>
      <div className="absolute top-[12vh] right-[32.5vw] z-10">
        <div onClick={closeLightbox} className="flex justify-end pb-3">
          <CloseIcon classname=" text-white w-10 h-10" viewBox="0 0 5 23" />
        </div>
        <PictureGallery width="w-[35rem]" thumbnailWidth="w-24" thumbnailGroupProperties="justify-center gap-7 mt-9" navArrows={true} />
      </div>
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-transparentBlack"></div>;
    </div>
  );
}
