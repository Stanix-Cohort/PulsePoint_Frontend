function Hero() {
  return (
    <section className="relative mx-1 overflow-hidden rounded-b-[18px] bg-[#570000]">
      {/* Background stripes */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(0,0,0,0.35) 60px, rgba(0,0,0,0.35) 76px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[600px] max-w-[1440px] items-center justify-between px-16 pb-20 pt-24">
        
        {/* LEFT SIDE */}
        <div className="z-10 max-w-[560px]">
          
          {/* Small label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
            <span className="text-sm text-white">♡</span>

            <span className="font-['Montserrat'] text-xs font-medium text-white">
              Saving Lives Across Nigeria
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Inter'] text-[58px] font-extrabold leading-[1.08] tracking-[-2px] text-white">
            Real People.
            <br />

            <span className="text-white">
              Real Donations.
            </span>

            <br />

            <span className="text-[#FF5555]">
              Real Impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[510px] font-['Montserrat'] text-[14px] leading-7 text-white/85">
            PulsePoint connects hospitals in urgent need of blood with eligible
            donors nearby. Create a request or become a donor, it takes just
            minutes.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-4 rounded-xl bg-[#D60000] px-8 font-['Montserrat'] text-[12px] font-semibold text-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition hover:bg-[#b90000]"
            >
              <span>Become a Donor</span>

              <span className="text-lg leading-none">
                →
              </span>
            </button>

            <button
              type="button"
              className="flex h-10 items-center justify-center rounded-xl border border-white px-7 font-['Montserrat'] text-[12px] font-semibold text-white transition hover:bg-white hover:text-[#570000]"
            >
              Find a Donor (Hospital)
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden h-[500px] w-[480px] lg:block">
          
          {/* Blood-drop image */}
          <div
            className="absolute right-10 top-8 h-[400px] w-[300px] overflow-hidden border-[5px] border-[#D60000]"
            style={{
              clipPath:
                "path('M150 0 C120 45 15 155 15 245 C15 335 75 400 150 400 C225 400 285 335 285 245 C285 155 180 45 150 0 Z')",
            }}
          >
            <img
              src="/hero-blood.jpg"
              alt="Hands holding a heart"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Handwritten message */}
          <div className="absolute right-0 top-10 rotate-[-8deg] font-['cursive'] text-[18px] leading-6 text-[#FF9B9B]">
            Donate
            <br />
            Today.
            <br />
            Save
            <br />
            Tomorrow.
            <br />
            <span className="text-2xl">♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;