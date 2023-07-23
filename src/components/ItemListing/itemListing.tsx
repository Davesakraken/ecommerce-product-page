import ListingDetails from "./ListingDetails";
import PictureGallery from "./PictureGallery";

export default function itemListing() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-12 lg:mx-[24vw] mt-20">
        <div>
          <PictureGallery />
        </div>
        <div>
          <ListingDetails />
        </div>
      </div>
    </main>
  );
}
