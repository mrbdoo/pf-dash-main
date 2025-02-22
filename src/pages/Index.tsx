
import { PhotoGeneratorForm } from "@/components/forms/PhotoGeneratorForm";
import { TipsSidebar } from "@/components/tips/TipsSidebar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted");
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 px-0 py-10">
        <h1 className="text-[32px] font-semibold mb-[30px]">
          Generate a Photo
        </h1>
        <PhotoGeneratorForm />
      </div>
      <TipsSidebar />
    </div>
  );
};

export default Index;
