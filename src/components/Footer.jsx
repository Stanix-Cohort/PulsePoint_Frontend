import Logo from "./Logo";
import ActionButtons from "./ActionButtons";

function Footer() {
  return (
    <footer
      className="
        w-full
        bg-gradient-to-r from-[#250606] via-[#350707] to-[#5A0A0B]

        px-5
        py-10

        sm:px-6
        sm:py-12

        md:px-8
        md:py-14

        xl:h-[472px]
        xl:px-[90px]
        xl:py-[56px]
      "
    >
      {/* Mobile + Tablet Layout */}
      <div
        className="
          mx-auto
          flex
          w-full
          flex-col

          xl:hidden
        "
      >
        {/* Brand Header */}
        <div className="flex w-full flex-col">
          <Logo footer />

          <p
            className="
              m-0
              mt-6
              max-w-[500px]
              font-['Inter']
              text-[15px]
              font-normal
              leading-[25px]
              text-white

              sm:text-[16px]
              sm:leading-[27px]
            "
          >
            Connecting hospitals with eligible blood donors to save lives
            across Nigeria.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-7 w-full">
          <ActionButtons />
        </div>

        {/* Copyright */}
        <div className="mt-10">
          <p
            className="
              m-0
              font-['Inter']
              text-[13px]
              font-normal
              leading-[22px]
              text-[#8F9FA3]
            "
          >
            © 2026 — Copyright
            <br />
            All Rights reserved
          </p>
        </div>

        {/* Navigation Links */}
        <nav
          className="
            mt-10
            flex
            w-full
            flex-col
            gap-6

            sm:mt-12
            sm:gap-7
          "
        >
          <a
            href="/"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            Home
          </a>

          <a
            href="#how-it-works"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            How it works
          </a>

          <a
            href="#eligibility"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            Eligibility Guide
          </a>

          <a
            href="#privacy"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#healthcare-policy"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            Healthcare Policy
          </a>

          <a
            href="#terms"
            className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
          >
            Terms and Conditions
          </a>
        </nav>

        {/* Contact Us */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12">
          <h3
            className="
              m-0
              font-['Inter']
              text-[20px]
              font-bold
              leading-[110%]
              tracking-[-1%]
              text-white
            "
          >
            Contact Us
          </h3>

          <div
            className="
              flex
              flex-col
              gap-1
              font-['Inter']
              text-[14px]
              font-normal
              leading-[160%]
              text-white
            "
          >
            <p className="m-0">+1 (999) 888-77-66</p>
            <p className="m-0">hello@logoipsum.com</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden h-[360px] w-full justify-between gap-[99px] xl:flex">
        {/* Left Side */}
        <div className="flex h-[360px] w-[560px] flex-col justify-between">
          {/* Logo, Description & Buttons */}
          <div className="flex h-[192px] w-[560px] flex-col gap-[32px]">
            {/* Logo */}
            <Logo footer />

            {/* Description & Buttons */}
            <div className="flex h-[130px] w-[490px] flex-col gap-[34px]">
              {/* Description */}
              <p className="m-0 h-[44px] w-[420px] font-['Inter'] text-[16px] font-normal leading-[140%] text-white">
                Connecting hospitals with eligible blood donors to save lives
                across Nigeria.
              </p>

              {/* Buttons */}
              <div className="h-[52px] w-[490px]">
                <ActionButtons />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex h-[36px] w-[560px] items-start">
            <p className="m-0 h-[36px] w-[129px] font-['Inter'] text-[13px] font-normal leading-[140%] text-[#8F9FA3]">
              © 2026 — Copyright
              <br />
              All Rights reserved
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex h-[360px] w-[560px] items-end justify-between">
          {/* Navigation Links */}
          <div className="flex h-[145px] w-[331px] gap-[67px]">
            {/* First Column */}
            <div className="flex h-[145px] w-[109px] flex-col gap-[41px]">
              <a
                href="/"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                How it works
              </a>

              <a
                href="#eligibility"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                Eligibility Guide
              </a>
            </div>

            {/* Second Column */}
            <div className="flex h-[145px] w-[155px] flex-col gap-[41px]">
              <a
                href="#privacy"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#healthcare-policy"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                HealthCare Policy
              </a>

              <a
                href="#terms"
                className="font-['Inter'] text-[15px] font-normal leading-[140%] text-white"
              >
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex h-[82px] w-[175px] flex-col gap-[16px]">
            <h3 className="m-0 h-[22px] w-[106px] font-['Inter'] text-[20px] font-medium leading-[110%] tracking-[-1%] text-white">
              Contact Us
            </h3>

            <div className="h-[44px] w-[145px] font-['Inter'] text-[14px] font-normal leading-[160%] text-white">
              <p className="m-0">+1 (999) 888-77-66</p>
              <p className="m-0">hello@logoipsum.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;