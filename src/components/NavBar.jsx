function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full pt-6">
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
          {/* Logo */}
          <div
            className="
              flex
              h-[30px]
              w-[136.96px]
              shrink-0
              items-center
              gap-2
            "
          >
            {/* Logo Icon */}
            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-red-700
              "
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H5L7.5 1L11 13L13.5 5L15.5 9H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Logo Text */}
            <div
              className="
                whitespace-nowrap
                font-['Inter']
                text-[18.75px]
                font-extrabold
                leading-none
              "
            >
              <span className="text-black">Pulse</span>
              <span className="text-red-700">Point</span>
            </div>
          </div>

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
              href="#faqs"
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
          <button
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
          </button>

          {/* Sign Up */}
          <button
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
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;