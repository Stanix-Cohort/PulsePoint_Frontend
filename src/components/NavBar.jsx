import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full pt-6">
      <div
        className="
          mx-auto
          flex
          w-[1263.96px]
          items-center
          gap-[265px]
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
        <a href="#home"><Logo /></a >

          {/* Navigation Links */}
          <div
            className="
              ml-[60px]
              flex
              items-center
              gap-[34px]
            "
          >
            <a
              href="#why-pulsepoint"
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[22px]
                text-black
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
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right CTA Container */}
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
            type="button"
            className="
              flex
              h-[46px]
              w-[101px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-[12px]
              border-[1px]
              border-solid
              border-black
              bg-white
              px-[28px]
              py-[12px]
              font-['Montserrat']
              text-[14px]
              font-semibold
              leading-[22px]
              text-black
              transition-colors
              duration-200
              hover:bg-gray-50
            "
            style={{
              border: "1px solid #000000",
            }}
          >
            Log In
          </a>

          {/* Sign Up */}
          <a
            href="###"
            type="button"
            className="
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
              transition-colors
              duration-200
              hover:bg-red-800
            "
          >
            <span>Sign Up</span>

            <img
              src="/arrow-right.svg"
              alt=""
              aria-hidden="true"
              className="h-[10px] w-[14px] shrink-0"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;