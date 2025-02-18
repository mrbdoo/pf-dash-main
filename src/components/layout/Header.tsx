import { SearchInput } from "../ui/SearchInput";
import { NotificationBadge } from "../ui/NotificationBadge";
import { UserProfile } from "../ui/UserProfile";

export const Header = () => {
  return (
    <header className="flex items-center h-[70px] bg-white -mx-5 my-0 px-5 py-0 max-sm:px-2.5 max-sm:py-0">
      <SearchInput />
      <div className="flex items-center gap-[25px] max-sm:gap-[15px]">
        <div className="flex items-center gap-4 text-sm text-[#646464] font-semibold">
          <img
            src="https://placehold.co/40x27"
            alt="Language"
            className="w-10 h-[27px] rounded-[5px]"
          />
          <span>English</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99999 3.92537L1.91247 0.837847C1.68466 0.610041 1.31532 0.610041 1.08751 0.837847C0.859705 1.06565 0.859705 1.435 1.08751 1.6628L4.58751 5.1628C4.81532 5.39061 5.18466 5.39061 5.41247 5.1628L8.91247 1.6628C9.14027 1.435 9.14027 1.06565 8.91247 0.837847C8.68466 0.610041 8.31532 0.610041 8.08751 0.837847L4.99999 3.92537Z"
              fill="#646464"
            />
          </svg>
        </div>
        <NotificationBadge count={6} />
        <UserProfile
          name="Moni Roy"
          role="Admin"
          image="https://placehold.co/44x44"
        />
      </div>
    </header>
  );
};
