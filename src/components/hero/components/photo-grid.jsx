const PhotoGrid = () => {
  return (
    <section className="grid grid-cols-4 items-center gap-2 md:gap-3 lg:gap-4">
      {
        //TODO: colocar as imagens quando disponíveis
      }
      <div className="row-span-2">
        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-2 space-y-2 lg:space-y-4 lg:pb-40">
        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>

        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-2 space-y-2 lg:space-y-4 lg:pt-20">
        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>

        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-2">
        <div className="aspect-[80/95] w-auto min-w-16">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
