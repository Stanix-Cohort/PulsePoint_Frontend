import EligibilityCard from "./EligibilityCard";

function DonorEligibility() {
  return (
    <section
      id="eligibility"
      className="
        bg-[#350202]
        px-5
        pb-[70px]
        pt-[80px]

        sm:px-6
        sm:pb-[80px]
        sm:pt-[90px]

        md:px-8
        md:pb-[90px]
        md:pt-[100px]

        lg:px-0
        lg:pb-[102px]
        lg:pt-[112px]
      "
    >
      {/* Header */}
      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
          items-start

          lg:h-[133px]
          lg:w-[1264px]
          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        <h2
          className="
            m-0
            w-full
            text-left
            font-['Montserrat']
            text-[30px]
            font-semibold
            leading-[100%]
            tracking-[0]
            text-white

            sm:text-[34px]

            lg:h-[46px]
            lg:w-[404px]
            lg:text-center
            lg:text-[38px]
          "
        >
          Donor Eligibility Tips
        </h2>

        <div
          className="
            mt-5
            flex
            w-full
            flex-col
            gap-[15px]

            sm:mt-6

            lg:mt-0
            lg:h-[133px]
            lg:w-[450px]
          "
        >
          <p
            className="
              m-0
              w-full
              font-['Inter']
              text-[15px]
              font-normal
              leading-[27px]
              tracking-[0]
              text-white

              sm:text-[16px]
              sm:leading-[30px]

              lg:h-[70px]
              lg:w-[450px]
              lg:text-[17px]
              lg:leading-[35px]
            "
          >
            Before signing up, make sure you meet the basic requirements to
            donate blood safely.
          </p>

          <a
            href="/donor"
            className="
              flex
              h-[48px]
              w-[206px]
              cursor-pointer
              items-center
              justify-center
              gap-[4px]
              rounded-[12px]
              bg-[#FF7E7E]
              px-[28px]
              py-[12px]
              font-['Montserrat']
              text-[14px]
              font-semibold
              leading-[160%]
              text-[#1A1A1A]
            "
          >
            <span className="h-[22px] w-[122px] whitespace-nowrap">
              Become a Donor
            </span>

            <img
              src="/arrow-right-dark.svg"
              alt=""
              aria-hidden="true"
              className="h-[10px] w-[14px]"
            />
          </a>
        </div>
      </div>

      {/* Lower Content */}
      <div
        className="
          mx-auto
          mt-10
          flex
          w-full
          flex-col
          gap-5

          sm:mt-12
          sm:gap-6

          md:max-w-[700px]

          lg:mt-[57px]
          lg:h-[395px]
          lg:w-[1264px]
          lg:max-w-none
          lg:flex-row
          lg:gap-[8px]
          lg:p-[10px]
        "
      >
        {/* First Card Stack */}
        <div
          className="
            order-1
            flex
            w-full
            flex-col
            gap-[8px]
            rounded-[24px]
            bg-[#BC1010]
            p-[7px]

            lg:h-[375px]
            lg:w-[308.5px]
            lg:shrink-0
          "
        >
          <EligibilityCard
            title="Age"
            description="18 to 65 years old"
          />

          <EligibilityCard
            title="Weight"
            description="At least 50kg"
          />

          <EligibilityCard
            title="Blood Type"
            description="All types accepted"
          />
        </div>

        {/* Image */}
        <div
          className="
            order-2
            h-[240px]
            w-full
            shrink-0

            sm:h-[300px]

            lg:-ml-[10px]
            lg:h-[375px]
            lg:w-[639px]
          "
        >
          <img
            src="/donor-eligibility.png"
            alt="Blood donation"
            className="
              h-full
              w-full
              rounded-[18px]
              object-cover
            "
          />
        </div>

        {/* Second Card Stack */}
        <div
          className="
            order-3
            flex
            w-full
            flex-col
            gap-[8px]
            rounded-[24px]
            bg-[#BC1010]
            p-[7px]

            lg:h-[375px]
            lg:w-[308.5px]
            lg:shrink-0
          "
        >
          <EligibilityCard
            title="Health"
            description="No existing medical conditions"
          />

          <EligibilityCard
            title="Pregnancy"
            description="Not pregnant or nursing"
          />

          <EligibilityCard
            title="Last Donation"
            description="At least 12 weeks ago"
          />
        </div>
      </div>
    </section>
  );
}

export default DonorEligibility;