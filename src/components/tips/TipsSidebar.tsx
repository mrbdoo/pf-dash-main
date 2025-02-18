export const TipsSidebar = () => {
  return (
    <aside className="w-[306px] px-5 pt-[154px] max-md:hidden">
      <div className="mb-10">
        <h3 className="text-xs font-semibold mb-2.5">Tips:</h3>
        <p className="text-xs leading-[21px] mb-2.5">
          Type only crucial Ingirdients you want to see on photo, not the whole
          recipe :)
        </p>
        <p className="text-xs leading-[21px] mb-2.5">
          If you have an image reference, you may add it also.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="text-xs font-semibold mb-2.5">Styles are:</h3>
        <p className="text-xs leading-[21px] mb-2.5">
          1. Casual. Classical food photo styling and lightng
        </p>
        <p className="text-xs leading-[21px] mb-2.5">
          2. Funky. Light picture, bright colors
        </p>
        <p className="text-xs leading-[21px] mb-2.5">
          3. White Background. If you need isolated picture of dish
        </p>
      </div>
    </aside>
  );
};
