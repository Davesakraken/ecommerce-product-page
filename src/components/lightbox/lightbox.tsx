import PictureGallery from "../itemListing/pictureGallery";

export default function LightBox() {
  return (
    <div>
      <div className="absolute top-[25vh] right-[32.5vw] z-10">
        <PictureGallery minWidth="[30rem]" maxWidth="[30rem]" />
      </div>
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-transparentBlack"></div>;
    </div>
  );
}
