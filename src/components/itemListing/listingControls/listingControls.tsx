import QuantityControls from "@/components/itemListing/listingControls/quantityControls";
import OrangeButton from "@/components/orangeButton";
import { CartIcon } from "@/components/svgs";
import { useQuantity } from "@/context/quantityContext";
import { useCart } from "@/context/cartContext";

export default function ListingControls() {
  const { quantity, setQuantity } = useQuantity();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!quantity) return;
    addToCart(quantity);
    setQuantity(1);
  };

  return (
    <section className="flex justify-between mt-10">
      <QuantityControls />
      <OrangeButton onClick={handleAddToCart} text="Add to cart" icon={<CartIcon classname="fill-current text-white" />} />
    </section>
  );
}
