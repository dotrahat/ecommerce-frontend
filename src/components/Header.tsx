import logo from "/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center bg-neutral-900 py-2 uppercase text-neutral-50">
        Enjoy €290 off the C3 with code SUMMER.
      </div>
      <div className="container flex justify-between py-4">
        <img src={logo} alt="logo" />
        <nav className="flex items-center justify-center gap-4">
          <Link className="text-neutral-500 hover:text-neutral-700" to="/">
            Home
          </Link>
          <Link className="text-neutral-500 hover:text-neutral-700" to="/shop">
            Shop
          </Link>
          <Link className="text-neutral-500 hover:text-neutral-700" to="/blog">
            Blog
          </Link>
          <Link className="text-neutral-500 hover:text-neutral-700" to="/about">
            About
          </Link>
          <Link
            className="text-neutral-500 hover:text-neutral-700"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
