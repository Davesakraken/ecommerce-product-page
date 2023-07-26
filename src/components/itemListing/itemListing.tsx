import ListingDetails from "./listingDetails";
import PictureGallery from "./pictureGallery";

export default function ItemListing() {
  return (
    <main>
      <div className="flex justify-center flex-wrap gap-28 mt-24">
        <PictureGallery width="w-[28rem]" thumbnailWidth="w-[6rem]" thumbnailGroupProperties="justify-between" gap="gap-5" />
        <ListingDetails />
      </div>
    </main>
  );
}
