import { Logo } from "../svgs";
import BurgerMenu from "./burger_menu";
import Cart from "./cart/cart";

export default function Navbar() {
  // Styles
  const navButtonStyles = "hover:text-black hover:border-b-5 border-b-orange-default";
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    // outter container
    <section className="flex w-full lg:justify-center">
      {/* inner container */}
      <div className="flex h-[4.3rem] bg-white w-full justify-around lg:h-auto lg:gap-10 lg:w-auto lg:border-b xl:gap-80">
        {/* nav section */}
        <div className="flex items-center lg:gap-8 lg:items-start lg:pt-10">
          <BurgerMenu />
          <Logo />
          <nav>
            <ul className="hidden gap-10 pl-6 lg:flex lg:h-20">
              {navItems.map((i) => (
                <li key={i} className={navButtonStyles}>
                  {i}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Cart />
      </div>
    </section>
  );
}
