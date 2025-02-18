
interface RatioSelectorProps {
  selected: string | null;
  onSelect: (ratio: string) => void;
}

export const RatioSelector = ({ selected, onSelect }: RatioSelectorProps) => {
  const ratios = ['1:1', '9:16', '16:9'];
  
  return (
    <div className="mb-[30px]">
      <label className="text-xs font-semibold mb-[9px] block">
        Chose Ratio
      </label>
      <div className="flex gap-[23px] max-sm:flex-wrap max-sm:justify-center">
        {ratios.map((ratio) => (
          <div
            key={ratio}
            onClick={() => onSelect(ratio)}
            className={`w-[135px] h-[135px] border text-2xl font-semibold bg-white rounded-lg border-solid cursor-pointer ${
              selected === ratio 
                ? 'border-[#7364DB] border-4 text-[#7364DB]' 
                : 'border-[#C8C8C8] text-[#C8C8C8]'
            } flex items-center justify-center`}
          >
            {ratio}
          </div>
        ))}
      </div>
    </div>
  );
};
