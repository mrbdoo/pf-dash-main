export const StyleSelector = () => {
  return (
    <div className="mb-[30px]">
      <label className="text-xs font-semibold mb-[9px] block">
        Chose a style
      </label>
      <div className="flex gap-[22px] max-sm:flex-wrap max-sm:justify-center">
        <img
          src="https://placehold.co/133x134"
          alt="Style 1"
          className="w-[133px] h-[134px] object-cover rounded-lg"
        />
        <img
          src="https://placehold.co/133x133"
          alt="Style 2"
          className="w-[133px] h-[134px] object-cover rounded-lg"
        />
        <img
          src="https://placehold.co/133x134"
          alt="Style 3"
          className="w-[133px] h-[134px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
