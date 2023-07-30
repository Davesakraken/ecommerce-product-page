import ListingControls from "@/components/itemListing/listingControls/listingControls";

export default function ListingDetails() {
  return (
    <article className="w-[27rem]">
      <section className="mb-8 mt-16">
        <h3 className="mb-4">SNEAKER COMPANY</h3>
        <h1 className="mb-9">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand
          everything the weather can offer.
        </p>
      </section>
      <section>
        <div className="flex items-center mb-2 gap-4">
          <h1 className="text-[30px]">$125.00</h1>
          <p className="text-[16px] align-middle p-[1px] px-2 text-orange-default bg-orange-pale rounded-md font-bold text-center">50%</p>
        </div>
        <h2 className="line-through text-blue-grayish">$250.00</h2>
      </section>
      <ListingControls />
    </article>
  );
}
