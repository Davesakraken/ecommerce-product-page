import QuantityControls from "@/components/itemListing/listingControls/quantityControls";
import OrangeButton from "@/components/orangeButton";
import { CartIcon } from "@/components/svgs";

export default function ListingControls() {
  return (
    <section className="flex justify-between mt-10">
      <QuantityControls />
      <OrangeButton text="Add to cart" icon={<CartIcon classname="fill-current text-white mr-3" />} />
    </section>
  );
}
