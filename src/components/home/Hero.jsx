import Navbar from "../NavBar";
import ActionButtons from "../ActionButtons";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[800px]
        overflow-hidden
        rounded-[18px]

        max-md:min-h-[1050px]
        max-sm:min-h-[1100px]
      "
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

          max-lg:mt-[130px]
          max-lg:w-full
          max-lg:max-w-[1100px]
          max-lg:px-8

          max-md:mt-[110px]
          max-md:flex-col
          max-md:items-center
          max-md:gap-12
          max-md:px-6

          max-sm:mt-[90px]
          max-sm:gap-10
          max-sm:px-5
        "
      >
        {/* Left Content */}
        <div
          className="
            flex
            w-[640px]
            flex-col
            gap-[20px]

            max-lg:w-[58%]
            max-md:w-full
            max-md:max-w-[640px]
          "
        >
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

              max-sm:h-[40px]
              max-sm:w-fit
              max-sm:px-[18px]
              max-sm:py-[11px]
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

                max-sm:text-[12px]
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

              max-lg:h-auto
              max-lg:w-full
            "
          >
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

                max-lg:h-auto
                max-lg:w-full
                max-lg:text-[52px]
                max-lg:leading-[62px]

                max-md:text-[48px]
                max-md:leading-[57px]

                max-sm:text-[40px]
                max-sm:leading-[48px]
                max-sm:tracking-[-1.5px]
              "
            >
              <span className="block">Real People.</span>
              <span className="block">Real Donations.</span>
              <span className="block text-[#ff6f6f]">Real Impact.</span>
            </h1>

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

                max-lg:h-auto
                max-lg:w-full
                max-lg:max-w-[560px]
                max-lg:text-[16px]
                max-lg:leading-[30px]

                max-md:text-[16px]
                max-md:leading-[29px]

                max-sm:text-[15px]
                max-sm:leading-[27px]
              "
            >
              PulsePoint connects hospitals in urgent need of blood with
              eligible donors nearby. Create a request or become a donor,
              it takes just minutes.
            </p>
          </div>

          {/* Hero Buttons */}
          <div className="mt-[13px] max-md:mt-2">
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

            max-lg:h-[480px]
            max-lg:w-[45%]

            max-md:h-[430px]
            max-md:w-full
            max-md:max-w-[613px]

            max-sm:h-[390px]
            max-sm:w-full
          "
        >
          {/* Border */}
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

              max-lg:left-1/2
              max-lg:top-0
              max-lg:h-[500px]
              max-lg:w-[710px]
              max-lg:-translate-x-1/2

              max-md:top-0
              max-md:h-[420px]
              max-md:w-[600px]

              max-sm:h-[320px]
              max-sm:w-[460px]
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
              h-auto
              w-[748px]
              object-contain

              max-lg:left-1/2
              max-lg:top-[5px]
              max-lg:w-[660px]
              max-lg:-translate-x-1/2

              max-md:top-[5px]
              max-md:w-[585px]

              max-sm:top-[11px]
              max-sm:w-[220px]
            "
          />

          {/* Desktop Handwritten Text */}
          <div
            className="
              absolute
              right-[-5px]
              top-[-8px]
              z-30
              max-md:hidden
              handwritten-entrance

              max-lg:right-[2%]
              max-lg:top-0
              max-lg:scale-[0.9]

              max-md:right-[8%]
              max-md:top-[-5px]
              max-md:scale-[0.85]

              max-sm:right-[5%]
              max-sm:top-[-8px]
              max-sm:scale-[0.7]
            "
          >
            <div
              className="
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
                className="mt-[-2px] h-[15px] w-[16px]"
                style={{
                  filter:
                    "invert(69%) sepia(72%) saturate(469%) hue-rotate(309deg) brightness(101%) contrast(101%)",
                }}
              />
            </div>
          </div>

          {/* Mobile Handwritten Text */}
          <div
            className="
              absolute
              bottom-0
              left-[5%]
              z-30
              hidden
              handwritten-entrance

              max-md:flex

              max-sm:left-[4%]
            "
          >
            <div
              className="
                flex
                h-[105px]
                w-[120px]
                flex-col
                rotate-[-8deg]
                font-['Just_Me_Again_Down_Here']
                text-[25px]
                font-normal
                leading-[31px]
                tracking-[-0.2px]
                text-[#FF9B9A]
                handwritten-wiggle

                max-sm:text-[26px]
                max-sm:leading-[29px]
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
                className="mt-[2px] h-[15px] w-[16px]"
                style={{
                  filter:
                    "invert(69%) sepia(72%) saturate(469%) hue-rotate(309deg) brightness(101%) contrast(101%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;