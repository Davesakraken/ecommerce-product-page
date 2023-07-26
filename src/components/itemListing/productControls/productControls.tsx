import AddButton from "./addButton";
import QuantityControls from "./quantityControls";

export default function ProductControls() {
  return (
    <section className="flex justify-between mt-10">
      <QuantityControls />
      <AddButton />
    </section>
  );
}
