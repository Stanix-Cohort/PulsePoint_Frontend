function HowItWorksCard({ number, description }) {
  return (
    <div
      className="
        flex
        min-h-[220px]
        w-full
        shrink-0
        flex-col
        gap-8
        rounded-[18px]
        border
        border-[#DBDBDB]
        bg-white
        px-6
        py-6

        sm:min-h-[230px]
        sm:rounded-[20px]
        sm:px-7
        sm:py-7

        md:min-h-[240px]
        md:px-8
        md:py-8

        xl:h-[287px]
        xl:min-h-0
        xl:w-[317px]
        xl:gap-[50px]
        xl:rounded-[21px]
        xl:px-[30px]
        xl:py-[34px]
      "
    >
      <div
        className="
          flex
          w-full
          flex-col
          gap-5

          sm:gap-6

          md:gap-7

          xl:h-[219px]
          xl:w-[257px]
          xl:gap-[57px]
        "
      >
        <span
          className="
            font-['Public_Sans']
            text-[80px]
            font-semibold
            leading-[0.7]
            tracking-[0]

            sm:text-[90px]

            md:text-[100px]

            xl:text-[120px]
            xl:leading-[50.95px]
          "
        >
          {number}
        </span>

        <p
          className="
            m-0
            w-full
            font-['Inter']
            text-[15px]
            font-normal
            leading-[24px]
            tracking-[-0.09px]

            sm:max-w-[500px]
            sm:text-[15px]
            sm:leading-[25px]

            md:max-w-[600px]
            md:text-[16px]
            md:leading-[27px]

            xl:h-[72px]
            xl:w-[239px]
            xl:text-[15px]
            xl:leading-[23.8px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;