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

        xl:px-0
        xl:pb-[102px]
        xl:pt-[112px]
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

          xl:h-[133px]
          xl:w-[1264px]
          xl:flex-row
          xl:items-start
          xl:justify-between
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

            xl:h-[46px]
            xl:w-[404px]
            xl:text-center
            xl:text-[38px]
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

            xl:mt-0
            xl:h-[133px]
            xl:w-[450px]
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

              xl:h-[70px]
              xl:w-[450px]
              xl:text-[17px]
              xl:leading-[35px]
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

          xl:mt-[57px]
          xl:h-[395px]
          xl:w-[1264px]
          xl:max-w-none
          xl:flex-row
          xl:gap-[8px]
          xl:p-[10px]
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

            xl:h-[375px]
            xl:w-[308.5px]
            xl:shrink-0
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

            xl:-ml-[10px]
            xl:h-[375px]
            xl:w-[639px]
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

            xl:h-[375px]
            xl:w-[308.5px]
            xl:shrink-0
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