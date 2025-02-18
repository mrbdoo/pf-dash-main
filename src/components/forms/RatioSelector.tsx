export const RatioSelector = () => {
  return (
    <div className="mb-[30px]">
      <label className="text-xs font-semibold mb-[9px] block">
        Chose Ratio
      </label>
      <div className="flex gap-[23px] max-sm:flex-wrap max-sm:justify-center">
        <div className="w-[135px] h-[135px] border text-2xl font-semibold bg-white rounded-lg border-solid border-[#C8C8C8] flex items-center justify-center">
          1:1
        </div>
        <div className="w-[135px] h-[135px] border text-2xl font-semibold bg-white rounded-lg border-solid border-[#C8C8C8] flex items-center justify-center">
          9:16
        </div>
        <div className="w-[135px] h-[135px] border text-2xl font-semibold bg-white rounded-lg border-solid border-[#C8C8C8] flex items-center justify-center">
          16:9
        </div>
      </div>
    </div>
  );
};
