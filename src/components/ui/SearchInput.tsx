export const SearchInput = () => {
  return (
    <div className="relative w-[388px] mr-auto max-sm:w-full max-sm:max-w-[300px]">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
      >
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.69353 12.535C12.4234 11.3748 13.6959 8.22136 12.5357 5.49152C11.3755 2.76168 8.22208 1.4892 5.49225 2.64936C2.76241 3.80951 1.48993 6.96297 2.65008 9.69281C3.81024 12.4226 6.9637 13.6951 9.69353 12.535Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3903 11.3896L15.5556 15.5556"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[38px] text-sm bg-[#F5F6FA] pl-[45px] pr-5 py-0 rounded-[19px] border-[0.6px] border-solid border-[#D5D5D5]"
      />
    </div>
  );
};
