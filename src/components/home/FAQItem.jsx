function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`w-[1030px] rounded-[13px] bg-[#F5F5F5] ${
        isOpen
          ? "h-[146px] px-[22px] py-[17px]"
          : "h-[66px] px-[18px] py-[12px]"
      }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-start gap-[23px]"
      >
        <span className="flex h-[24.5px] w-[24.5px] shrink-0 items-center justify-center text-[24px] font-bold leading-none text-[#1A1A1A]">
          {isOpen ? "×" : "+"}
        </span>

        <span className="font-['Montserrat'] text-[18px] font-semibold leading-[42px] tracking-[-0.3px] text-[#1A1A1A]">
          {question}
        </span>
      </button>

      {/* Answer */}
      {isOpen && (
        <p className="m-0 mt-[10px] w-[986px] font-['Inter'] text-[15px] font-normal leading-[30px] tracking-[0] text-[#1A1A1A]">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;