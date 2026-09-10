function EligibilityCard({ title, description }) {
  return (
    <div
      className="
        flex
        min-h-[105px]
        w-full
        shrink-0
        items-start
        justify-center
        rounded-[18px]
        bg-white
        px-5
        py-[24px]

        sm:min-h-[110px]
        sm:px-[25px]
        sm:py-[27px]

        lg:h-[115px]
        lg:min-h-0
        lg:w-[294.5px]
        lg:px-[25px]
        lg:py-[27px]
      "
    >
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-[10px]

          sm:gap-[13px]

          lg:h-[61px]
          lg:w-[244.5px]
          lg:gap-[13px]
        "
      >
        {/* Title */}
        <h3
          className="
            m-0
            text-center
            font-['Montserrat']
            text-[16px]
            font-semibold
            leading-[20px]
            tracking-[0]
            text-[#1A1A1A]

            sm:text-[17px]
            sm:leading-[18px]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            m-0
            w-full
            text-center
            font-['Inter']
            text-[14px]
            font-normal
            leading-[25px]
            tracking-[0]
            text-[#1A1A1A]

            sm:text-[15px]
            sm:leading-[30px]

            lg:w-full
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default EligibilityCard;