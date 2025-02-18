import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#F5F5FA]">
      <Sidebar />
      <main className="flex-1 px-5 py-0 max-md:px-2.5 max-md:py-0">
        <Header />
        {children}
      </main>
    </div>
  );
};
