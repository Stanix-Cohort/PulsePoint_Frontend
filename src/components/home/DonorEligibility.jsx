import EligibilityCard from "./EligibilityCard";

function DonorEligibility() {
  return (
    <section className="bg-[#350202] pb-[102px] pt-[112px]">
      {/* Header */}
      <div className="mx-auto flex h-[133px] w-[1264px] items-start justify-between">
        <h2 className="m-0 h-[46px] w-[404px] text-center font-['Montserrat'] text-[38px] font-semibold leading-[100%] tracking-[0] text-white">
          Donor Eligibility Tips
        </h2>

        <div className="flex h-[133px] w-[450px] flex-col gap-[15px]">
          <p className="m-0 h-[70px] w-[450px] font-['Inter'] text-[17px] font-normal leading-[35px] tracking-[0] text-white">
            Before signing up, make sure you meet the basic
            requirements to donate blood safely.
          </p>

          <a
            href="/donor"
            className="flex h-[48px] w-[206px] cursor-pointer items-center justify-center gap-[4px] rounded-[12px] bg-[#FF7E7E] px-[28px] py-[12px] font-['Montserrat'] text-[14px] font-semibold leading-[160%] text-[#1A1A1A]"
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
      <div className="mx-auto mt-[57px] flex h-[395px] w-[1264px] gap-[8px] p-[10px]">
        {/* Image */}
            <div className="-ml-[10px] h-[375px] w-[639px] shrink-0">
            <img
                src="/donor-eligibility.png"
                alt="Blood donation"
                className="h-[375px] w-[639px] rounded-[18px] object-cover"
            />
            </div>

        {/* First Column */}
        <div className="flex h-[375px] w-[308.5px] shrink-0 flex-col gap-[8px] rounded-[24px] bg-[#BC1010] p-[7px]">
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

        {/* Second Column */}
        <div className="flex h-[375px] w-[308.5px] shrink-0 flex-col gap-[8px] rounded-[24px] bg-[#BC1010] p-[7px]">
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