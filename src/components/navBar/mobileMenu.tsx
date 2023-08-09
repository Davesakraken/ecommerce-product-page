import { CloseIcon } from "@/components/svgs";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const listItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div>
      <div className="absolute top-0 left-0 w-[100svw] h-full bg-transparentBlack z-40">
        <div className="absolute top-0 left-0 w-[60svw] h-full bg-white z-50 p-6">
          <CloseIcon onClick={onClose} additionalClassNames="text-gray-600" />
          <nav className="pt-9">
            <ul className="">
              {listItems.map((e) => (
                <li key={e} className="text-black text-lg font-bold py-3">
                  {e}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
