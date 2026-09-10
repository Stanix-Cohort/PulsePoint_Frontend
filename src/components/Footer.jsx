import Logo from "./Logo";
import ActionButtons from "./ActionButtons";

function Footer() {
  return (
        <footer
        className="h-[472px] w-full px-[90px] py-[56px]"
        style={{
            background:
            "linear-gradient(90deg, #250606 0%, #350707 45%, #5A0A0B 100%)",
        }}
        >
      <div className="flex h-[360px] w-full justify-between gap-[99px]">
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