import ListingDetails from "./ListingDetails";
import PictureGallery from "./PictureGallery";

//

export default function ItemListing() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 lg:mx-[24vw] mt-20">
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
