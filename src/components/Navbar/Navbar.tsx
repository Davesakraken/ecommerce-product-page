import { Logo, CartIcon } from "../svg";
import AvatarImage from "../../assets/image-avatar.png";

export default function Navbar() {
  return (
    <section className="h-22 flex justify-around mt-6 items-center">
      <div className="flex border-b gap-80 items-center pb-10">
        <div className="flex gap-8">
          <Logo />
          <nav>
            <ul className="flex gap-10 pl-6">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-12 items-center">
          <CartIcon />
          <img className="w-12" src={AvatarImage} alt="avatar" />
        </div>
      </div>
    </section>
  );
}
