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

        max-lg:min-h-[1100px]
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

          max-xl:w-full
          max-xl:px-10

          max-lg:mt-[130px]
          max-lg:max-w-[900px]
          max-lg:flex-col
          max-lg:items-center
          max-lg:gap-12
          max-lg:px-8

          max-md:mt-[110px]
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

            max-xl:w-[56%]

            max-lg:w-full
            max-lg:max-w-[640px]

            max-md:w-full
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

              max-xl:w-full

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

                max-xl:w-full

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

                max-xl:w-full

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
            shrink-0

            w-[400px]
            aspect-[422/573]

            max-xl:w-[350px]

            max-lg:w-[350px]
            max-md:w-full
            max-md:max-w-[300px]

            max-sm:w-full
            max-sm:max-w-[300px]
          "
        >
          {/* Scaled Visual Stage */}
          <div
            className="
              absolute
              inset-0
              md:-translate-x-[70px]
            "
          >
            {/* Border */}
            <img
              src="/hero-border.png"
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                z-10
                h-auto
                w-full
                object-contain
              "
            />

            {/* Blood Image */}
            <img
              src="/hero-blood.png"
              alt="Hands holding a heart"
              className="
                absolute
                left-1/2
                top-[3.5%]
                z-20
                h-auto
                w-[93.13%]
                -translate-x-1/2
                object-contain
              "
            />
          </div>

          {/* Desktop + Tablet Handwritten Text */}
          <div
            className="
              absolute
              right-[2%]
              top-[2%]
              z-30
              handwritten-entrance

              max-xl:right-[-2%]
              max-xl:top-[1%]
              max-xl:scale-[0.9]

              max-lg:right-[-2%]
              max-lg:top-[1%]

              max-md:hidden
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
              left-[-40%]
              top-[60%]
              z-30
              hidden
              handwritten-entrance

              max-md:flex

              max-sm:left-[-7%]
              max-sm:top-[90%]
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