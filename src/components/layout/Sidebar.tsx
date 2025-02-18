import { Link } from "react-router-dom";

const navigationItems = [
  {
    title: "Generate a Photo",
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.1667 11.9163V8.24967C20.1667 3.66634 18.3334 1.83301 13.75 1.83301H8.25004C3.66671 1.83301 1.83337 3.66634 1.83337 8.24967V13.7497C1.83337 18.333 3.66671 20.1663 8.25004 20.1663H11.9167" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.71912 13.2828L8.90079 10.4503C9.21245 10.0469 9.78996 9.97361 10.1933 10.2853L11.8708 11.6053C12.2741 11.9169 12.8516 11.8436 13.1633 11.4495L15.2808 8.71777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.8567 14.5013L18.1134 15.0238C18.2417 15.2805 18.5625 15.5188 18.8467 15.5738L19.195 15.6288C20.24 15.803 20.4875 16.573 19.7359 17.3338L19.415 17.6546C19.2042 17.8746 19.085 18.2963 19.1492 18.5897L19.195 18.7822C19.4792 20.0472 18.81 20.533 17.71 19.873L17.4717 19.7355C17.1875 19.5705 16.7292 19.5705 16.445 19.7355L16.2067 19.873C15.0975 20.5421 14.4284 20.0472 14.7217 18.7822L14.7675 18.5897C14.8317 18.2963 14.7125 17.8746 14.5017 17.6546L14.1809 17.3338C13.4292 16.573 13.6767 15.803 14.7217 15.6288L15.07 15.5738C15.345 15.528 15.675 15.2805 15.8034 15.0238L16.06 14.5013C16.555 13.5022 17.3617 13.5022 17.8567 14.5013Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    path: "/",
    active: true,
  },
  {
    title: "Generate a Video",
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.75916 10.2852V14.401C2.75916 18.5168 4.40916 20.1668 8.52499 20.1668H13.4658C17.5817 20.1668 19.2317 18.5168 19.2317 14.401V10.2852" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 10.9997C12.6775 10.9997 13.915 9.63384 13.75 7.95634L13.145 1.83301H8.86416L8.24999 7.95634C8.08499 9.63384 9.32249 10.9997 11 10.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.7841 10.9997C18.6358 10.9997 19.9924 9.49634 19.8091 7.65384L19.5524 5.13301C19.2224 2.74967 18.3058 1.83301 15.9041 1.83301H13.1083L13.7499 8.25884C13.9058 9.77134 15.2716 10.9997 16.7841 10.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.17001 10.9997C6.68251 10.9997 8.04835 9.77134 8.19501 8.25884L8.39668 6.23301L8.83668 1.83301H6.04085C3.63918 1.83301 2.72251 2.74967 2.39251 5.13301L2.14501 7.65384C1.96168 9.49634 3.31835 10.9997 5.17001 10.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 15.583C9.46921 15.583 8.70837 16.3438 8.70837 17.8747V20.1663H13.2917V17.8747C13.2917 16.3438 12.5309 15.583 11 15.583Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    path: "/video",
  },
  {
    title: "Your generations",
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.1667 11.9163V8.24967C20.1667 3.66634 18.3334 1.83301 13.75 1.83301H8.25004C3.66671 1.83301 1.83337 3.66634 1.83337 8.24967V13.7497C1.83337 18.333 3.66671 20.1663 8.25004 20.1663H11.9167" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6666 17.8105L16.115 19.2497L19.25 15.583" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.41663 9.625V12.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 9.625V12.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5834 9.625V12.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    path: "/generations",
  },
  {
    title: "Billing",
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.83337 7.79199H11.9167" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.5 15.125H7.33333" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.625 15.125H13.2917" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.1667 10.3855V14.7672C20.1667 17.9847 19.3509 18.7913 16.0967 18.7913H5.90337C2.64921 18.7913 1.83337 17.9847 1.83337 14.7672V7.23219C1.83337 4.01469 2.64921 3.20801 5.90337 3.20801H12.1734" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5833 2.97852H18.4524C19.0849 2.97852 19.5983 3.55602 19.5983 4.12435C19.5983 4.75685 19.0849 5.27018 18.4524 5.27018H15.5833V2.97852Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5833 5.27051H18.8558C19.5799 5.27051 20.1666 5.78384 20.1666 6.41634C20.1666 7.04884 19.5799 7.56217 18.8558 7.56217H15.5833V5.27051Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.1967 7.5625V8.70833" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.1967 1.83301V2.97884" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.6741 2.97852H14.6666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.6741 7.5625H14.6666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    path: "/billing",
  },
  {
    title: "Settings",
    icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.25004 20.1663H13.75C18.3334 20.1663 20.1667 18.333 20.1667 13.7497V8.24967C20.1667 3.66634 18.3334 1.83301 13.75 1.83301H8.25004C3.66671 1.83301 1.83337 3.66634 1.83337 8.24967V13.7497C1.83337 18.333 3.66671 20.1663 8.25004 20.1663Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.0417 10.9997C16.0417 13.7863 13.7867 16.0413 11 16.0413C8.21337 16.0413 6.51753 13.2363 6.51753 13.2363M6.51753 13.2363H8.79087M6.51753 13.2363V15.7572M5.95837 10.9997C5.95837 8.21301 8.19504 5.95801 11 5.95801C14.3642 5.95801 16.0417 8.76301 16.0417 8.76301M16.0417 8.76301V6.24217M16.0417 8.76301H13.805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    path: "/settings",
  },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 flex flex-col bg-white px-[25px] py-3.5 max-md:w-[200px] max-sm:hidden">
      <img
        src="https://placehold.co/84x84"
        alt="Logo"
        className="w-[84px] h-[84px] mb-[11px] mx-auto my-0"
      />
      <nav>
        {navigationItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center cursor-pointer text-[#7E7E8F] text-sm font-semibold mb-2.5 px-[21px] py-[17px] rounded-xl ${
              item.active ? "bg-[#7364DB] text-white" : "hover:bg-gray-50"
            }`}
          >
            <div
              className="mr-3"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
