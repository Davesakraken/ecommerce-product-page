import ListingDetails from "./listingDetails";
import PictureGallery from "./pictureGallery";

export default function ItemListing() {
  return (
    <main>
      <div className="flex justify-center flex-wrap gap-28 mt-20">
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
