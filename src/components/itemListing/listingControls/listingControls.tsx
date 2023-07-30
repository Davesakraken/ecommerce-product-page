import AddButton from "@/components/itemListing/listingControls/addToCartButton";
import QuantityControls from "@/components/itemListing/listingControls/quantityControls";

export default function ListingControls() {
  return (
    <section className="flex justify-between mt-10">
      <QuantityControls />
      <AddButton />
    </section>
  );
}
