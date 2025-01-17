// components/Home/Navbar/Nav.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import classNames from "classnames";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "fixed h-[12vh] z-[10] w-full transition-all duration-200",
        { "bg-[#240b39]": navBg }
      )}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="ml-[1.5rem] sm:ml-0"
        />

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p
                  className="nav__link"
                  aria-current={
                    window.location.pathname === navlink.url
                      ? "page"
                      : undefined
                  }
                >
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="md:px-10 md:py-3 px-8 py-3 text-black font-semibold sm:text-base text-sm bg-white
              hover:bg-gray-200 transition-all duration-200 rounded-lg"
              aria-label="Hire me"
            >
              Hire me
            </button>

            {/* Burger Menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
              aria-label="Open Navigation Menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
