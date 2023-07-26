import ListingDetails from "./listingDetails";
import PictureGallery from "./pictureGallery";

export default function ItemListing() {
  return (
    <main>
      <div className="flex justify-center flex-wrap gap-28 mt-20">
        <PictureGallery maxWidth="[30rem]" minWidth="[30rem]" />
        <ListingDetails />
      </div>
    </main>
  );
}
