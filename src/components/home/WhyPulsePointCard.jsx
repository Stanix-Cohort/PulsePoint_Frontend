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
        h-[278.07px]
        flex-col
        items-center
        border-[3px]
        border-white
        bg-[#250606]
        px-[25px]
        pt-[27px]
        pb-[27px]

        ${position === 0 ? "rounded-tl-[18px] rounded-bl-[18px]" : ""}

        ${position === 2 ? "rounded-tr-[18px] rounded-br-[18px]" : ""}
      `}
    >
      {/* Icon */}
      <div className="flex h-[57.59px] w-[57.59px] shrink-0 items-center justify-center rounded-full bg-[#FFF7F7] text-[#BC1010]">
        <img
            src={icon}
            alt=""
            className="h-[22.81px] w-[22.81px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="mt-[20px] flex h-[121px] w-[340px] flex-col items-center gap-[13px]">
        {/* Title */}
        <h3
          className="text-center text-[17px] font-semibold leading-[18px] tracking-[0] text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="w-[310px] text-center text-[15px] font-[200] leading-[30px] tracking-[0] text-white"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default WhyPulsePointCard;