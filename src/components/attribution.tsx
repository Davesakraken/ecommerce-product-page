import { GithubIcon } from "@/components/svgs";

export default function Attribution() {
  return (
    <section className="flex justify-center items-center p-5 gap-2">
      <div>
        Challenge by{" "}
        <a className="text-orange-default font-bold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-orange-default font-bold" href="https://www.davidbell.xyz/" target="_blank">
          David Bell
        </a>
        .
      </div>
      <div className="w-8">
        <a href="https://github.com/Davesakraken/ecommerce-product-page/" target="_blank">
          <GithubIcon additionalClassNames="text-black text-center" />
        </a>
      </div>
    </section>
  );
}
