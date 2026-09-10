function WhyPulsePointCard({
  title,
  description,
  icon,
  position,
}) {
  return (
    <article
      className={`
        flex
        min-h-[260px]
        w-full
        flex-col
        items-center
        border-[3px]
        border-white
        bg-[#250606]
        px-5
        py-6

        md:min-h-[278px]
        md:px-[25px]
        md:pt-[27px]
        md:pb-[27px]

        xl:h-[278.07px]
        xl:min-h-0
        xl:px-[25px]
        xl:pt-[27px]
        xl:pb-[27px]

        ${position === 0 ? "rounded-tl-[18px] rounded-bl-[18px]" : ""}
        ${position === 2 ? "rounded-tr-[18px] rounded-br-[18px]" : ""}

        max-xl:rounded-[16px]

        xl:first:rounded-tl-[18px]
        xl:first:rounded-bl-[18px]
        xl:last:rounded-tr-[18px]
        xl:last:rounded-br-[18px]
      `}
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[57.59px]
          w-[57.59px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#FFF7F7]
          text-[#BC1010]
        "
      >
        <img
          src={icon}
          alt=""
          className="h-[22.81px] w-[22.81px] object-contain"
        />
      </div>

      {/* Text */}
      <div
        className="
          mt-[18px]
          flex
          w-full
          flex-col
          items-center
          gap-[13px]

          sm:mt-[20px]

          xl:h-[121px]
          xl:w-[340px]
        "
      >
        {/* Title */}
        <h3
          className="
            m-0
            w-full
            text-center
            font-['Montserrat']
            text-[16px]
            font-semibold
            leading-[20px]
            tracking-[0]
            text-white

            sm:text-[17px]
            sm:leading-[18px]

            xl:w-full
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            m-0
            w-full
            max-w-[330px]
            text-center
            font-['Inter']
            text-[14px]
            font-[200]
            leading-[25px]
            tracking-[0]
            text-white

            sm:max-w-[340px]
            sm:text-[15px]
            sm:leading-[30px]

            xl:w-[310px]
            xl:max-w-none
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default WhyPulsePointCard;