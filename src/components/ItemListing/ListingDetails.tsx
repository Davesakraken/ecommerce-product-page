export default function PictureGallery() {
  return (
    <main>
      <article className="mb-6 mt-16">
        <h3 className="mb-3">SNEAKER COMPANY</h3>
        <h1 className="mb-6">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand
          everything the weather can offer.
        </p>
      </article>
      <section>
        <h1 className="text-[30px]">
          $125.00
          <span className=" text-[16px] align-middle ml-4 p-1 px-3 translate-x-5 text-orange-default bg-orange-pale rounded-md w-5 text-center">
            50%
          </span>
        </h1>
        <h2 className="line-through">$250.00</h2>
      </section>
    </main>
  );
}
