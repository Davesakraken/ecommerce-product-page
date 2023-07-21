import { CartIcon } from "../svg";
import AvatarImage from "../../assets/image-avatar.png";
import { useState } from "react";
import CartMenu from "./CartMenu";

export default function Navbar() {
  // styles
  const AvatarImageStyles = "rounded-full cursor-pointer hover:outline outline-orange-default select-none";

  const [isOpen, setIsOpen] = useState(false);

  const toggleCartMenu = () => setIsOpen((currentValue) => !currentValue);

  return (
    <div className="flex items-center gap-5 lg:relative lg:pb-3 lg:gap-12">
      <div onClick={toggleCartMenu}>
        <CartIcon />
      </div>
      <img className={`w-7 xl:w-12 ${AvatarImageStyles}`} src={AvatarImage} alt="avatar" />

      {isOpen && <CartMenu />}
    </div>
  );
}
