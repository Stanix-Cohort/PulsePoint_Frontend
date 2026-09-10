import { useState } from "react";
import WhyPulsePointCard from "./WhyPulsePointCard";
import AudienceToggle from "./AudienceToggle";

const donorFeatures = [
  {
    title: "Find Requests Near You",
    description:
      "See blood requests from hospitals in your area that match your blood type and availability.",
    icon: "/icons/find-requests.svg",
  },
  {
    title: "Trusted Hospitals Only",
    description:
      "All hospitals are verified with license IDs. Know exactly who is requesting blood and why.",
    icon: "/icons/trusted-hospitals.svg",
  },
  {
    title: "Respond in Seconds",
    description:
      "Accept or decline requests with a single tap. The hospital contacts you directly to coordinate.",
    icon: "/icons/respond.svg",
  },
];

const hospitalFeatures = [
  {
    title: "Reach Eligible Donors Fast",
    description:
      "Create a blood request and instantly notify donors who match your required blood type and location.",
    icon: "/icons/reach-donor.svg",
  },
  {
    title: "Track Responses in Real Time",
    description:
      "See who accepted, declined, or withdrew. Mark outcomes as Donated or No-show for full accountability.",
    icon: "/icons/track-response.svg",
  },
  {
    title: "Build Donor Trust",
    description:
      "Your verified hospital profile with logo and contact details helps donors respond with confidence.",
    icon: "/icons/trusted-hospitals.svg",
  },
];

function WhyPulsePoint() {
  const [audience, setAudience] = useState("donors");

  const features =
    audience === "donors" ? donorFeatures : hospitalFeatures;

  return (
    <section
      id="why-pulsepoint"
      className="
        bg-white
        px-4
        py-[70px]

        sm:px-6
        sm:py-[80px]

        md:px-8
        md:py-[90px]

        xl:px-4
        xl:py-[100px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1206px]
          flex-col
          items-center
        "
      >
        {/* Section Title */}
        <h2
          className="
            m-0
            text-center
            font-['Montserrat']
            text-[30px]
            font-semibold
            leading-[100%]
            tracking-[0]
            text-[#1D1D1D]

            sm:text-[34px]

            xl:text-[38px]
          "
        >
          Why PulsePoint?
        </h2>

        {/* Audience Toggle */}
        <AudienceToggle
          audience={audience}
          setAudience={setAudience}
        />

        {/* Feature Cards */}
        <div
          className="
            mt-10
            w-full
            rounded-[19px]
            border-r-[6px]
            border-b-[6px]
            border-[#2F0707]
            bg-[#BC1010]
            p-[8px]

            sm:mt-11
            sm:border-r-[7px]
            sm:border-b-[7px]
            sm:p-[9px]

            xl:mt-12
            xl:h-[307px]
            xl:w-[1206px]
            xl:border-r-[8px]
            xl:border-b-[8px]
            xl:p-[10px]
          "
        >
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-[8px]

              md:grid-cols-2

              xl:h-[268px]
              xl:grid-cols-3
              xl:gap-[8px]
            "
          >
            {features.map((feature, index) => (
              <WhyPulsePointCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                position={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPulsePoint;