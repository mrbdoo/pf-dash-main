export const PerspectiveSelector = () => {
  return (
    <div className="mb-[30px]">
      <label className="text-xs font-semibold mb-[9px] block">
        Chose perspective
      </label>
      <div className="flex gap-[22px] max-sm:flex-wrap max-sm:justify-center">
        <img
          src="https://placehold.co/133x135"
          alt="Perspective 1"
          className="w-[133px] h-[134px] object-cover rounded-lg"
        />
        <img
          src="https://placehold.co/133x135"
          alt="Perspective 2"
          className="w-[133px] h-[134px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
