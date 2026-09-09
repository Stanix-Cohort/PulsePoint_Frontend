function HowItWorksCard({ number, description }) {
  return (
    <div className="flex h-[287px] w-[317px] shrink-0 flex-col gap-[50px] rounded-[21px] border border-[#DBDBDB] bg-white px-[30px] py-[34px]">
      <div className="flex h-[219px] w-[257px] flex-col gap-[57px]">
        <span className="font-['Public_Sans'] text-[120px] font-semibold leading-[50.95px] tracking-[0]">
          {number}
        </span>

        <p className="m-0 h-[72px] w-[239px] font-['Inter'] text-[15px] font-normal leading-[23.8px] tracking-[-0.09px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;