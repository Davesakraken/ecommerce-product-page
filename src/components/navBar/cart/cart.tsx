import { CartIcon } from "../../svgs";
// import AvatarImage from "../../../assets/image-avatar.png";
import { useState } from "react";
import CartMenu from "./cartMenu";
import QuantityIndecator from "./cartNotification";

export default function Navbar() {
  // styles
  const AvatarImageStyles = "rounded-full cursor-pointer hover:outline outline-orange-default select-none";

  const [isOpen, setIsOpen] = useState(false);

  const toggleCartMenu = () => setIsOpen((currentValue) => !currentValue);

  return (
    <div className="flex items-center gap-5 lg:relative lg:pb-3 lg:gap-12">
      <QuantityIndecator />
      <div onClick={toggleCartMenu}>
        <CartIcon />
      </div>
      <img className={`w-7 xl:w-12 ${AvatarImageStyles}`} src="./image-avatar.png" alt="avatar" />

      {isOpen && <CartMenu />}
    </div>
  );
}
