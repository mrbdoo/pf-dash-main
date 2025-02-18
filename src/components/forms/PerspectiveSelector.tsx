
interface PerspectiveSelectorProps {
  selected: number | null;
  onSelect: (index: number) => void;
}

export const PerspectiveSelector = ({ selected, onSelect }: PerspectiveSelectorProps) => {
  return (
    <div className="mb-[30px]">
      <label className="text-xs font-semibold mb-[9px] block">
        Chose perspective
      </label>
      <div className="flex gap-[22px] max-sm:flex-wrap max-sm:justify-center">
        {[1, 2].map((index) => (
          <div
            key={index}
            onClick={() => onSelect(index)}
            className={`relative cursor-pointer ${
              selected === index ? 'ring-4 ring-[#7364DB]' : ''
            }`}
          >
            <img
              src={`https://placehold.co/133x135`}
              alt={`Perspective ${index}`}
              className="w-[133px] h-[134px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
