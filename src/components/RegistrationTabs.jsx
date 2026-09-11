import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function RegistrationIcon({ src, active, className }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 ${
        active ? "bg-[#1A1A1A]" : "bg-[#B5B8BD]"
      } ${className}`}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

function RegistrationTabs() {
  return (
    <div
      className="
        relative
        flex
        h-[60.5px]
        w-full
        max-w-full
        min-w-0
        items-center
        overflow-hidden
        rounded-[30.25px]
        bg-[#F5F0F0]
        p-[3.03px]

        max-md:h-[52px]
        max-md:rounded-full
        max-md:p-[3px]
      "
    >
      <div
        className="
          relative
          flex
          h-[54.45px]
          w-full
          max-w-full
          min-w-0
          items-center

          max-md:h-[46px]
        "
      >
        {/* Donor Registration */}
        <NavLink
          to="/signup/donor"
          className="
            relative
            z-10
            flex
            h-[54.45px]
            min-w-0
            flex-1
            items-center
            justify-center
            gap-[7px]
            overflow-hidden
            rounded-[30.25px]
            px-2
            font-['Montserrat']
            text-[14.52px]
            font-semibold
            whitespace-nowrap

            max-md:h-[46px]
            max-md:gap-[4px]
            max-md:rounded-full
            max-md:px-1
            max-md:text-[10px]
          "
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  layoutId="registration-active-pill"
                  className="
                    absolute
                    inset-0
                    rounded-[30.25px]
                    bg-white

                    max-md:rounded-full
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <RegistrationIcon
                src="/DonorReg.svg"
                active={isActive}
                className="
                  relative
                  z-10
                  h-[16px]
                  w-[12px]

                  max-md:h-[13px]
                  max-md:w-[10px]
                "
              />

              <span
                className={`relative z-10 ${
                  isActive
                    ? "text-[#1A1A1A]"
                    : "text-[#B5B8BD]"
                }`}
              >
                Donor Registration
              </span>
            </>
          )}
        </NavLink>

        {/* Hospital Registration */}
        <NavLink
          to="/signup/hospital"
          className="
            relative
            z-10
            flex
            h-[54.45px]
            min-w-0
            flex-1
            items-center
            justify-center
            gap-[7px]
            overflow-hidden
            rounded-[30.25px]
            px-2
            font-['Montserrat']
            text-[14.52px]
            font-semibold
            whitespace-nowrap

            max-md:h-[46px]
            max-md:gap-[4px]
            max-md:rounded-full
            max-md:px-1
            max-md:text-[10px]
          "
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  layoutId="registration-active-pill"
                  className="
                    absolute
                    inset-0
                    rounded-[30.25px]
                    bg-white

                    max-md:rounded-full
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <RegistrationIcon
                src="/HospitalReg.svg"
                active={isActive}
                className="
                  relative
                  z-10
                  h-[16px]
                  w-[16px]

                  max-md:h-[13px]
                  max-md:w-[13px]
                "
              />

              <span
                className={`relative z-10 ${
                  isActive
                    ? "text-[#1A1A1A]"
                    : "text-[#B5B8BD]"
                }`}
              >
                Hospital Registration
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default RegistrationTabs;