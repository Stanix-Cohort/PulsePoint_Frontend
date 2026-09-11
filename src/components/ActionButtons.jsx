function ActionButtons() {
  return (
    <div
      className="
        flex
        h-[52px]
        w-[490px]
        gap-[10px]

        max-md:h-auto
        max-md:w-full
        max-md:flex-col
        max-md:items-center
        max-md:gap-[12px]
      "
    >
      {/* Become a Donor */}
      <a
        href="/signup/donor"
        className="
          flex
          h-[52px]
          w-[251px]
          shrink-0
          cursor-pointer
          items-center
          justify-center
          gap-[9px]
          rounded-[12px]
          border-r-[3px]
          border-b-[3px]
          border-r-white
          border-b-white
          bg-[#BC1010]
          px-[48px]
          py-[14px]
          font-['Montserrat']
          text-[14px]
          font-semibold
          leading-[160%]
          text-white

          max-md:w-full
          max-md:max-w-[360px]
        "
      >
        <span className="whitespace-nowrap">
          Become a Donor
        </span>

        <img
          src="/arrow-right.svg"
          alt=""
          aria-hidden="true"
          className="h-[10px] w-[14px] shrink-0"
        />
      </a>

      {/* Find a Donor (Hospital) */}
      <a
        href="/signup/hospital"
        className="
          flex
          h-[50px]
          w-[229px]
          shrink-0
          cursor-pointer
          items-center
          justify-center
          gap-[20px]
          rounded-[12px]
          border
          border-[#F4F4F4]
          bg-transparent
          px-[31px]
          py-[14px]
          font-['Montserrat']
          text-[14px]
          font-semibold
          leading-[160%]
          text-white

          max-md:w-full
          max-md:max-w-[360px]
        "
      >
        <span className="whitespace-nowrap">
          Find a Donor (Hospital)
        </span>
      </a>
    </div>
  );
}

export default ActionButtons;