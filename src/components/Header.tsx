"use client";

import logo from "/logo.svg";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center bg-neutral-900 py-2 uppercase text-neutral-50">
        Enjoy €290 off the C3 with code SUMMER.
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl grow justify-between gap-4 px-4 py-4">
        <img src={logo} alt="logo" />
        <div className="flex grow items-center justify-end md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:flex">
          <DesktopMenu />
        </div>
        <Button>Shop Now</Button>
      </div>
    </header>
  );
};

export default Header;
