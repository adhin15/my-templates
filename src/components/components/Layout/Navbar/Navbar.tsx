import { useState } from "react";
import useTheme from "../../../shared/Theme/Theme";
import { NavbarItems } from "../../../../constant/constant";
import { NavbarItemType } from "../../../../constant/types";
import Button from "../../../shared/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const { colorTheme } = useTheme();

  return (
    <>
      <div
        className={`md:flex hidden items-center justify-between px-12 py-2 max-w-full h-[80px] w-full flex-wrap fixed top-0 transition ease-in delay-550 relative" z-30 ${
          scrolled ? `bg-[${colorTheme.secondaryBg}]` : `bg-transparent`
        }`}
        id="container-navbar"
      >
        <div id="container-image">
          <a href={"/"} type="button" className="cursor-pointer h-full">
            <img src="/assets/logo/main-logo-black.png" className="h-16" />
          </a>
        </div>
        <div className="flex justify-center gap-4 ">
          {NavbarItems?.map((value: NavbarItemType, index: number) => {
            return (
              <a href={value.url} className="cursor-pointer" key={index}>
                {value.label}
              </a>
            );
          })}
        </div>
        <div></div>
      </div>
      <div className={`md:hidden max-w-full h-[60px] w-full flex-wrap fixed top-0 z-30 bg-[${colorTheme.secondaryBg}]`}>
        <div id="container-image" className="p-2 relative w-[15%] h-full">
          <a href={"/"} type="button" className="cursor-pointer h-full w-full relative">
            <img src="/assets/logo/main-logo-black.png" className="h-full w-full object-cover" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
