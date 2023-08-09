import QuantityControls from "@/components/itemListing/listingControls/quantityControls";
import OrangeButton from "@/components/orangeButton";
import { CartIcon } from "@/components/svgs";
import { useQuantity } from "@/hooks/quantityContext";
import { useCart } from "@/hooks/cartContext";

export default function ListingControls() {
  const { quantity, setQuantity } = useQuantity();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!quantity) return;
    addToCart(quantity);
    setQuantity(1);
  };

  return (
    <section className="flex flex-wrap justify-between mt-10">
      <QuantityControls />
      <OrangeButton
        classNames="w-full sm:w-60 h-14 sm:h-12"
        onClick={handleAddToCart}
        text="Add to cart"
        icon={<CartIcon additionalClassNames="fill-current text-white" />}
      />
    </section>
  );
}
