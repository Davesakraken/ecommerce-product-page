import ListingDetails from "@/components/itemListing/listingDetails";
import PictureGallery from "@/components/pictureGallery/pictureGallery";
import { useIsMobile, useIsLightbox } from "@/hooks/MediaQuerys";

interface props {
  openLightbox: () => void;
}

export default function ItemListing({ openLightbox }: props) {
  const isMobile = useIsMobile();
  const isLightbox = useIsLightbox();

  return (
    <main>
      <div className="flex justify-center flex-wrap sm:gap-28 sm:mt-24">
        <PictureGallery
          width={isMobile ? "w-full" : "w-[28rem]"}
          thumbnails={!isMobile}
          thumbnailWidth="w-[6rem]"
          thumbnailGroupProperties="justify-between"
          gap="gap-5"
          navArrows={isMobile}
          positionLeft="left-[3vw]"
          positionRight="right-[3vw]"
          openLightbox={
            isLightbox
              ? () => {
                  return;
                }
              : openLightbox
          }
        />

        <ListingDetails />
      </div>
    </main>
  );
}
