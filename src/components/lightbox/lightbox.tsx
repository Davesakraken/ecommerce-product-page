import PictureGallery from "../itemListing/pictureGallery";
import NavigationArrows from "./navigationArrows";

export default function LightBox() {
  return (
    <div>
      <div className="absolute top-[14vh] right-[32.5vw] z-10">
        <NavigationArrows />
        <PictureGallery width="w-[35rem]" thumbnailWidth="w-24" thumbnailGroupProperties="justify-center gap-7 mt-9" />
      </div>
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-transparentBlack"></div>;
    </div>
  );
}
