import Navbar from "../NavBar";
import ActionButtons from "../ActionButtons";

function Hero() {
  return (
    <section id="home"
      className="relative min-h-[800px] overflow-hidden rounded-[18px]"
      style={{
        background: `
          radial-gradient(
            circle at 72% 45%,
            #691010 0%,
            #580909 28%,
            #480505 55%,
            #350202 78%,
            #280101 100%
          )
        `,
      }}
    >
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-[200px]
          flex
          w-[1263.96px]
          items-start
          justify-between
        "
      >
        {/* Left Content */}
        <div className="flex w-[640px] flex-col gap-[20px]">

          {/* Saving Lives Across Nigeria */}
          <div
            className="
              flex
              h-[45px]
              w-[265px]
              shrink-0
              items-center
              gap-[8px]
              rounded-tl-[30px]
              rounded-br-[30px]
              bg-white/10
              px-[22px]
              py-[14px]
            "
          >
            <img
              src="/heart-beat.svg"
              alt=""
              aria-hidden="true"
              className="h-[15px] w-[16px] shrink-0"
            />

            <span
              className="
                whitespace-nowrap
                font-['Montserrat']
                text-[14px]
                font-semibold
                leading-[100%]
                text-white
              "
            >
              Saving Lives Across Nigeria
            </span>
          </div>

          {/* Text Frame */}
          <div
            className="
              flex
              h-[341px]
              w-[640px]
              shrink-0
              flex-col
              gap-[14px]
            "
          >
            {/* Heading */}
            <h1
              className="
                m-0
                h-[225px]
                w-[640px]
                shrink-0
                font-['Montserrat']
                text-[62px]
                font-bold
                leading-[75px]
                tracking-[-2px]
                text-white
              "
            >
              <span className="block">
                Real People.
              </span>

              <span className="block">
                Real Donations.
              </span>

              <span className="block text-[#ff6f6f]">
                Real Impact.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                m-0
                h-[102px]
                w-[563px]
                shrink-0
                font-['Inter']
                text-[17px]
                font-normal
                leading-[34px]
                tracking-[-0.2px]
                text-white
              "
            >
              PulsePoint connects hospitals in urgent need of blood with
              eligible donors nearby. Create a request or become a donor,
              it takes just minutes.
            </p>
          </div>

        {/* Hero Buttons */}
        <div className="mt-[13px]">
          <ActionButtons />
        </div>
        </div>

        {/* Blood Visual */}
        <div
          className="
            relative
            h-[556px]
            w-[613px]
            shrink-0
          "
        >
          {/* Red Shape-Matching Border */}
          <img
            src="/hero-border.png"
            alt=""
            aria-hidden="true"
            className="
              absolute
              left-[23px]
              top-[-9px]
              z-10
              h-[570px]
              w-[815px]
              object-contain
            "
          />

          {/* Blood Image */}
          <img
            src="/hero-blood.png"
            alt="Hands holding a heart"
            className="
              absolute
              left-[23px]
              top-[10px]
              z-20
              h-[539px]
              w-[748px]
              object-contain
            "
          />

          {/* Handwritten Text */}
            <div
            className="
                absolute
                right-[-5px]
                top-[-8px]
                z-30
                flex
                h-[142px]
                w-[110px]
                flex-col
                items-center
                rotate-[-14.45deg]
                font-['Just_Me_Again_Down_Here']
                text-[31.21px]
                font-normal
                leading-[35.47px]
                tracking-[-0.28px]
                text-[#FF9B9A]
                handwritten-wiggle
            "
            >
            <div>
              Donate
              <br />
              Today,
              <br />
              Save
              <br />
              Tomorrow.
            </div>

            <img
              src="/heart-beat.svg"
              alt=""
              aria-hidden="true"
              className="
                mt-[-2px]
                h-[15px]
                w-[16px]
              "
              style={{
                filter:
                  "invert(69%) sepia(72%) saturate(469%) hue-rotate(309deg) brightness(101%) contrast(101%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;