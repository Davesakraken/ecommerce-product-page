import ListingDetails from "@/components/itemListing/listingDetails";
import PictureGallery from "@/components/itemListing/pictureGallery";

interface props {
  openLightbox: () => void;
}

export default function ItemListing({ openLightbox }: props) {
  return (
    <main>
      <div className="flex justify-center flex-wrap gap-28 mt-24">
        <PictureGallery
          width="w-[28rem]"
          thumbnailWidth="w-[6rem]"
          thumbnailGroupProperties="justify-between"
          gap="gap-5"
          openLightbox={openLightbox}
        />
        <ListingDetails />
      </div>
    </main>
  );
}
