import { useState } from "react";
import WhyPulsePointCard from "./WhyPulsePointCard";

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
    <section className="bg-white px-1 py-[100px]">
      <div className="mx-auto flex w-full flex-col items-center">
        <h2 className="whitespace-nowrap font-['Montserrat'] text-[38px] font-semibold leading-[100%] tracking-[0] text-[#1D1D1D]">
          Why PulsePoint?
        </h2>

        {/* Audience Toggle */}
        <div className="relative mt-8 flex h-[53px] w-[335px] items-center gap-[5px] rounded-[65px] border border-[#EDEFF2] px-[5px] py-[3px]">
          {/* Sliding red background */}
          <div
            className={`absolute top-[3px] h-[42px] w-[160px] rounded-[22px] bg-[#BC1010] transition-transform duration-300 ease-in-out ${
              audience === "hospitals"
                ? "translate-x-[165px]"
                : "translate-x-0"
            }`}
          />

          {/* Donors button */}
          <button
            onClick={() => setAudience("donors")}
            className={`relative cursor-pointer z-10 h-[42px] w-[160px] rounded-[22px] px-[24px] font-['Montserrat'] text-[14px] font-semibold leading-[100%] ${
              audience === "donors"
                ? "text-white"
                : "text-[#1D1D1D]"
            }`}
          >
            For Donors
          </button>

          {/* Hospitals button */}
          <button
            onClick={() => setAudience("hospitals")}
            className={`relative cursor-pointer z-10 h-[42px] w-[160px] rounded-[22px] px-[24px] font-['Montserrat'] text-[14px] font-semibold leading-[100%] ${
              audience === "hospitals"
                ? "text-white"
                : "text-[#1D1D1D]"
            }`}
          >
            For Hospitals
          </button>
        </div>

        {/* Feature Cards */}
        <div
          className="
            mt-12
            h-[307px]
            w-[1206px]
            rounded-[19px]
            border-r-[8px]
            border-b-[8px]
            border-[#2F0707]
            bg-[#BC1010]
            p-[10px]
          "
        >
          <div className="grid h-[268px] grid-cols-3 gap-[8px]">
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