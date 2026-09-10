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

        lg:h-[287px]
        lg:min-h-0
        lg:w-[317px]
        lg:gap-[50px]
        lg:rounded-[21px]
        lg:px-[30px]
        lg:py-[34px]
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

          lg:h-[219px]
          lg:w-[257px]
          lg:gap-[57px]
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

            lg:text-[120px]
            lg:leading-[50.95px]
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

            lg:h-[72px]
            lg:w-[239px]
            lg:text-[15px]
            lg:leading-[23.8px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;