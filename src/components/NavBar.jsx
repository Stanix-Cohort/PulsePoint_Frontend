import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);

    setTimeout(() => {
      setMenuVisible(false);
    }, 250);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    setMenuVisible(true);

    requestAnimationFrame(() => {
      setMenuOpen(true);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed left-0 top-0 z-[999] w-full pt-2 sm:pt-3 lg:pt-6">
      {/* Desktop Navbar */}
      <div
        className="
          navbar-entrance
          mx-auto
          hidden
          h-[72px]
          w-[1263.96px]
          items-center
          gap-[265px]
          lg:flex
        "
      >
        {/* Left Navigation Container */}
        <div
          className="
            flex
            h-[72px]
            w-[720.96px]
            shrink-0
            items-center
            rounded-[24px]
            bg-white
            pl-[22px]
            pr-[40px]
            shadow-[0_0_23px_rgba(0,0,0,0.07)]
          "
        >
          <a href="#hero">
            <Logo />
          </a>

          {/* Navigation Links */}
          <div className="ml-[60px] flex items-center gap-[34px]">
            <a
              href="#why-pulsepoint"
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[22px]
                text-black
                transition-colors
                duration-200
                hover:text-red-700
              "
            >
              Why PulsePoint?
            </a>

            <a
              href="#how-it-works"
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[22px]
                text-black
                transition-colors
                duration-200
                hover:text-red-700
              "
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[22px]
                text-black
                transition-colors
                duration-200
                hover:text-red-700
              "
            >
              FAQs
            </a>

            <a
              href="#privacy"
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[22px]
                text-black
                transition-colors
                duration-200
                hover:text-red-700
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Desktop CTA Container */}
        <div
          className="
            flex
            h-[72px]
            w-[278px]
            shrink-0
            items-center
            gap-[6px]
            rounded-[24px]
            bg-white
            px-[15px]
            py-[11px]
            shadow-[0_0_23px_rgba(0,0,0,0.07)]
          "
        >
          {/* Log In */}
          <a
            href="###"
            className="
              flex
              h-[46px]
              w-[101px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-[12px]
              border
              border-black
              bg-white
              px-[28px]
              py-[12px]
              font-['Montserrat']
              text-[14px]
              font-semibold
              leading-[22px]
              text-black
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-gray-50
            "
          >
            Log In
          </a>

          {/* Sign Up */}
          <a
            href="###"
            className="
              group
              flex
              h-[48px]
              w-[141px]
              shrink-0
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-[12px]
              bg-red-700
              px-[28px]
              py-[12px]
              font-['Montserrat']
              text-[14px]
              font-semibold
              leading-[22px]
              text-white
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-red-800
            "
          >
            <span>Sign Up</span>

            <img
              src="/arrow-right.svg"
              alt=""
              aria-hidden="true"
              className="
                h-[10px]
                w-[14px]
                shrink-0
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>

      {/* Mobile + Tablet Navbar */}
      <div
        ref={menuRef}
        className="
          navbar-entrance
          mx-auto
          w-[calc(100%-32px)]
          sm:w-[calc(100%-48px)]
          md:w-[calc(100%-64px)]
          lg:hidden
        "
      >
        <div
          className="
            relative
            flex
            h-[46px]
            w-full
            items-center
            justify-between
            rounded-[14px]
            bg-white
            px-[12px]
            shadow-[0_0_15px_rgba(0,0,0,0.08)]

            sm:h-[52px]
            sm:rounded-[17px]
            sm:px-[15px]

            md:h-[58px]
            md:rounded-[19px]
            md:px-[18px]
          "
        >
          {/* Logo */}
          <a href="#hero" onClick={closeMenu}>
            <Logo />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              flex
              h-[30px]
              w-[30px]
              cursor-pointer
              items-center
              justify-center
              transition-transform
              duration-200
              hover:scale-105
              md:h-[34px]
              md:w-[34px]
            "
          >
            {menuOpen ? (
              <span
                className="
                  font-['Inter']
                  text-[25px]
                  font-light
                  leading-none
                  text-black
                  md:text-[28px]
                "
              >
                ×
              </span>
            ) : (
              <span className="flex w-[17px] flex-col gap-[3px] md:w-[19px]">
                <span className="h-[1.5px] w-full bg-black" />
                <span className="h-[1.5px] w-full bg-black" />
                <span className="h-[1.5px] w-full bg-black" />
              </span>
            )}
          </button>

          {/* Mobile / Tablet Menu */}
          {menuVisible && (
            <div
              className={`
                absolute
                left-0
                top-[54px]
                flex
                w-full
                flex-col
                gap-5
                rounded-[16px]
                bg-white
                px-5
                py-5
                shadow-[0_0_20px_rgba(0,0,0,0.08)]
                transition-all
                duration-[250ms]
                ease-out

                ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }

                sm:top-[60px]

                md:top-[66px]
                md:gap-6
                md:rounded-[18px]
                md:px-6
                md:py-6
              `}
            >
              <a
                href="#why-pulsepoint"
                onClick={closeMenu}
                className="
                  font-['Montserrat']
                  text-[14px]
                  font-semibold
                  text-black
                  transition-colors
                  duration-200
                  hover:text-red-700
                  md:text-[15px]
                "
              >
                Why PulsePoint?
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="
                  font-['Montserrat']
                  text-[14px]
                  font-semibold
                  text-black
                  transition-colors
                  duration-200
                  hover:text-red-700
                  md:text-[15px]
                "
              >
                How It Works
              </a>

              <a
                href="#faq"
                onClick={closeMenu}
                className="
                  font-['Montserrat']
                  text-[14px]
                  font-semibold
                  text-black
                  transition-colors
                  duration-200
                  hover:text-red-700
                  md:text-[15px]
                "
              >
                FAQs
              </a>

              <a
                href="#privacy"
                onClick={closeMenu}
                className="
                  font-['Montserrat']
                  text-[14px]
                  font-semibold
                  text-black
                  transition-colors
                  duration-200
                  hover:text-red-700
                  md:text-[15px]
                "
              >
                Privacy Policy
              </a>

              {/* Mobile CTA Buttons */}
              <div className="flex gap-2 pt-1">
                <a
                  href="###"
                  onClick={closeMenu}
                  className="
                    flex
                    h-[42px]
                    flex-1
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-black
                    font-['Montserrat']
                    text-[13px]
                    font-semibold
                    text-black
                    transition-all
                    duration-200
                    hover:-translate-y-[1px]
                    hover:bg-gray-50
                    md:h-[46px]
                    md:text-[14px]
                  "
                >
                  Log In
                </a>

                <a
                  href="###"
                  onClick={closeMenu}
                  className="
                    flex
                    h-[42px]
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-[10px]
                    bg-red-700
                    font-['Montserrat']
                    text-[13px]
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:-translate-y-[1px]
                    hover:bg-red-800
                    md:h-[46px]
                    md:text-[14px]
                  "
                >
                  <span>Sign Up</span>

                  <img
                    src="/arrow-right.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-[9px] w-[12px] shrink-0"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;