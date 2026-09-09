function EligibilityCard({ title, description }) {
  return (
    <div className="flex h-[115px] w-[294.5px] shrink-0 items-start rounded-[18px] bg-white px-[25px] py-[27px]">
      <div className="flex h-[61px] w-[244.5px] flex-col items-center gap-[13px]">
        <h3 className="m-0 font-['Montserrat'] text-[17px] font-semibold leading-[18px] tracking-[0] text-[#1A1A1A]">
          {title}
        </h3>

        <p className="m-0 w-full font-['Inter'] text-[15px] font-normal leading-[30px] tracking-[0] text-center text-[#1A1A1A]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EligibilityCard;