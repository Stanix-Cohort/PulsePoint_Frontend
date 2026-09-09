function AudienceToggle({ audience, setAudience }) {
  return (
    <div className="relative mt-8 flex h-[53px] w-[335px] items-center gap-[5px] rounded-[65px] border border-[#EDEFF2] px-[5px] py-[3px]">
      <div
        className={`absolute top-[3px] h-[42px] w-[160px] rounded-[22px] bg-[#BC1010] transition-transform duration-300 ease-in-out ${
          audience === "hospitals"
            ? "translate-x-[165px]"
            : "translate-x-0"
        }`}
      />

      <button
        onClick={() => setAudience("donors")}
        className={`relative z-10 h-[42px] w-[160px] cursor-pointer rounded-[22px] px-[24px] font-['Montserrat'] text-[14px] font-semibold leading-[100%] ${
          audience === "donors" ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        For Donors
      </button>

      <button
        onClick={() => setAudience("hospitals")}
        className={`relative z-10 h-[42px] w-[160px] cursor-pointer rounded-[22px] px-[24px] font-['Montserrat'] text-[14px] font-semibold leading-[100%] ${
          audience === "hospitals" ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        For Hospitals
      </button>
    </div>
  );
}

export default AudienceToggle;