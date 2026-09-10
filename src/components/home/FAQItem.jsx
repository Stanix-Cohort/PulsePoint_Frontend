function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`
        w-full
        overflow-hidden
        rounded-[13px]
        bg-[#F5F5F5]
        transition-[padding] duration-300 ease-out

        ${
          isOpen
            ? "px-5 py-5 sm:px-[22px] sm:py-[20px]"
            : "px-5 py-4 sm:px-[18px] sm:py-[12px]"
        }

        lg:w-[1030px]
        lg:rounded-[13px]
        ${
          isOpen
            ? "lg:px-[22px] lg:py-[17px]"
            : "lg:px-[18px] lg:py-[12px]"
        }
      `}
    >
      {/* Question */}
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          cursor-pointer
          items-start
          justify-start
          gap-4
          text-left
          sm:gap-[20px]
          lg:items-center
          lg:gap-[23px]
        "
      >
        <span
          className={`
            flex
            h-[24.5px]
            w-[24.5px]
            shrink-0
            items-center
            justify-center
            pt-[1px]
            text-[24px]
            font-bold
            leading-none
            text-[#1A1A1A]
            transition-transform
            duration-300
            ease-out
            ${isOpen ? "rotate-90" : "rotate-0"}
          `}
        >
          {isOpen ? "×" : "+"}
        </span>

        <span
          className="
            font-['Montserrat']
            text-[16px]
            font-semibold
            leading-[24px]
            tracking-[-0.3px]
            text-[#1A1A1A]

            sm:text-[17px]
            sm:leading-[26px]

            md:text-[18px]

            lg:text-[18px]
            lg:leading-[42px]
          "
        >
          {question}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className="
              m-0
              mt-4
              w-full
              translate-y-0
              font-['Inter']
              text-[14px]
              font-normal
              leading-[25px]
              tracking-[0]
              text-[#1A1A1A]
              transition-transform
              duration-300
              ease-out

              sm:mt-[14px]
              sm:text-[15px]
              sm:leading-[28px]

              md:leading-[30px]

              lg:mt-[10px]
              lg:w-[986px]
              lg:text-[15px]
              lg:leading-[30px]
            "
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;