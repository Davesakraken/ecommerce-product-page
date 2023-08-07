import { MenuIcon } from "@/components/svgs";
import MobileMenu from "@/components/navBar/mobileMenu";
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuIcon onClick={handleMenuOpen} additionalClassNames="flex mt-[3px] mr-4 lg:hidden" />
      {open && <MobileMenu onClose={handleMenuClose} />}
    </>
  );
}
