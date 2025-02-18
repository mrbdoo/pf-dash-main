import { useState } from "react";
import { StyleSelector } from "./StyleSelector";
import { PerspectiveSelector } from "./PerspectiveSelector";
import { RatioSelector } from "./RatioSelector";

export const PhotoGeneratorForm = () => {
  const [foodName, setFoodName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);
  const [selectedPerspective, setSelectedPerspective] = useState<number | null>(null);
  const [selectedRatio, setSelectedRatio] = useState<string | null>(null);

  const isFormValid = foodName && selectedStyle !== null && 
                     selectedPerspective !== null && selectedRatio !== null;

  return (
    <div className="w-[760px] shadow-[4px_4px_29.7px_-10px_rgba(0,0,0,0.25)] bg-white p-10 rounded-[30px] max-md:w-full">
      <div className="mb-[30px]">
        <label className="text-xs font-semibold mb-[9px] block">
          Food Name
        </label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Type in the name of the dish"
          className="w-full text-sm px-4 py-3 rounded-lg border-4 border-solid border-[#B2A7FF]"
        />
      </div>

      <div className="flex gap-10 max-sm:flex-col max-sm:gap-5">
        <div className="mb-[30px] flex-1">
          <label className="text-xs font-semibold mb-[9px] block">
            Ingridients (optional)
          </label>
          <input
            type="text"
            placeholder="Separate inridients with coma"
            className="w-full text-sm px-4 py-3 rounded-lg border-4 border-solid border-[#B2A7FF]"
          />
        </div>

        <div className="mb-[30px] flex-1">
          <label className="text-xs font-semibold mb-[9px] block">
            Image Reference (optional)
          </label>
          <div className="w-[252px] h-11 flex items-center justify-center gap-2.5 text-xs text-[#7E7E8F] cursor-pointer bg-[#E8EDF2] rounded-[10px] max-sm:w-full">
            <span>Upload the photo</span>
            <i className="ti ti-upload" />
          </div>
        </div>
      </div>

      <StyleSelector selected={selectedStyle} onSelect={setSelectedStyle} />
      <PerspectiveSelector selected={selectedPerspective} onSelect={setSelectedPerspective} />
      <RatioSelector selected={selectedRatio} onSelect={setSelectedRatio} />

      <button 
        disabled={!isFormValid}
        className={`w-[258px] h-14 text-white text-sm font-semibold cursor-pointer mt-10 mb-0 mx-auto rounded-2xl border-[none] max-sm:w-full ${
          isFormValid ? 'bg-[#7364DB] hover:bg-[#5B4EC7]' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Generate
      </button>
    </div>
  );
};
