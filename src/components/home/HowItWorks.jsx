import { useState } from "react";
import AudienceToggle from "./AudienceToggle";
import HowItWorksCard from "./HowItWorksCard";

const steps = {
  donors: [
    {
      number: "1",
      description:
        "Sign up as a donor with your blood type, location, and availability.",
    },
    {
      number: "2",
      description:
        "Browse blood requests that match your blood type and location.",
    },
    {
      number: "3",
      description:
        "Accept a request to let the hospital know you are available.",
    },
    {
      number: "4",
      description:
        "A hospital representative will call you to coordinate the donation.",
    },
  ],

  hospitals: [
    {
      number: "1",
      description:
        "Sign up as a licensed hospital with your license ID and contact details.",
    },
    {
      number: "2",
      description:
        "Create a blood request with blood type, units needed, location, and urgency level.",
    },
    {
      number: "3",
      description:
        "Matching eligible donors are automatically notified and can respond.",
    },
    {
      number: "4",
      description:
        "Track donor responses and mark outcomes as Donated or No-show.",
    },
  ],
};

function HowItWorks() {
  const [audience, setAudience] = useState("donors");

  const currentSteps = steps[audience];

  return (
    <section
      id="how-it-works"
      className="
        bg-white
        px-5
        pb-[80px]
        pt-[80px]

        sm:px-6
        sm:pb-[90px]
        sm:pt-[90px]

        md:px-8
        md:pb-[100px]
        md:pt-[100px]

        xl:px-0
        xl:pb-[125px]
        xl:pt-[133px]
      "
    >
      {/* Mobile + Tablet Layout */}
      <div className="mx-auto flex w-full flex-col xl:hidden">
        {/* Section Heading */}
        <h2
          className="
            m-0
            font-['Montserrat']
            text-[30px]
            font-semibold
            leading-[100%]
            tracking-[0]
            text-[#000000]

            sm:text-[34px]
            md:text-[38px]
          "
        >
          How It Works
        </h2>

        {/* Audience Toggle */}
        <div className="mt-7 flex justify-start sm:mt-8">
          <AudienceToggle
            audience={audience}
            setAudience={setAudience}
          />
        </div>

        {/* Step Cards */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-4

            sm:mt-10
            sm:gap-5
          "
        >
          {currentSteps.map((step) => (
            <HowItWorksCard
              key={step.number}
              number={step.number}
              description={step.description}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-auto hidden h-[726px] w-[1262px] flex-col gap-[13px] xl:flex">
        {/* Section Heading */}
        <h2 className="m-0 h-[46px] w-[289px] font-['Montserrat'] text-[38px] font-semibold leading-[100%] tracking-[0] text-[#000000]">
          How It Works
        </h2>

        {/* Toggle + Cards */}
        <div className="ml-auto flex h-[667px] w-[973px] flex-col gap-[28px]">
          {/* Audience Toggle */}
          <div className="flex w-full justify-end">
            <AudienceToggle
              audience={audience}
              setAudience={setAudience}
            />
          </div>

          {/* Cards */}
          <div className="flex h-[586px] w-[973px] flex-col gap-[12px]">
            {/* First Three Cards */}
            <div className="flex h-[287px] w-[973px] gap-[11px]">
              {currentSteps.slice(0, 3).map((step) => (
                <HowItWorksCard
                  key={step.number}
                  number={step.number}
                  description={step.description}
                />
              ))}
            </div>

            {/* Fourth Card */}
            <div className="flex h-[287px] w-[973px] justify-end">
              <HowItWorksCard
                number={currentSteps[3].number}
                description={currentSteps[3].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;