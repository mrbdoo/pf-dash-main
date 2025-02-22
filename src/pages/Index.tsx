import { PhotoGeneratorForm } from "@/components/forms/PhotoGeneratorForm";
import { TipsSidebar } from "@/components/tips/TipsSidebar";

const Index = () => {
  return (
    <div className="flex">
      <div className="px-0 py-10">
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
