import Link from "next/link";
import { NavigationDropDown } from "./NavDropdown/desktop";
import { NavigationDropDownMobile } from "./NavDropdown/mobile";

const Header = () => {
  return (
    <header className="shadow-md py-3">
      {/* Desktop */}
      <nav className="container mx-auto justify-between content-center hidden lg:flex">
        <Link href="/">
          <h2 className="text-2xl font-bold">Astra</h2>
        </Link>
        <NavigationDropDown />
      </nav>

      {/* Mobile */}
      <nav className="container mx-auto flex justify-between content-center lg:hidden">
        <Link href="/">
          <h2 className="text-2xl font-bold">Astra</h2>
        </Link>
        <NavigationDropDownMobile />
      </nav>
    </header>
  );
};

export default Header;
