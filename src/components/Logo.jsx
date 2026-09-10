function Logo({ footer = false }) {
  return (
    <div className="flex h-[30px] w-[136.96px] shrink-0 items-center gap-2">
      {/* Logo Icon */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-700">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H5L7.5 1L11 13L13.5 5L15.5 9H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      <div className="whitespace-nowrap font-['Inter'] text-[18.75px] font-extrabold leading-none">
        <span className={footer ? "text-white" : "text-black"}>
          Pulse
        </span>
        <span className="text-red-700">Point</span>
      </div>
    </div>
  );
}

export default Logo;