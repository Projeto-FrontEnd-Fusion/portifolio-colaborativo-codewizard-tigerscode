const PhotoGrid = () => {
  return (
    <section className="sm:scale-1 m-auto grid w-fit scale-90 grid-cols-4 grid-rows-6 gap-2 py-[15px] md:gap-3 lg:m-0 lg:gap-4">
      {
        //TODO: colocar as imagens quando disponíveis
      }
      <div className="row-span-6 self-center">
        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="h-full max-h-full w-full rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-6 space-y-2 self-center lg:space-y-4 lg:pb-[116px]">
        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="col-span-1 row-span-3 h-full max-h-full w-full self-center rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>

        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="col-span-1 col-start-2 row-span-3 h-full max-h-full w-full self-center rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-6 space-y-2 self-center pt-[15px] lg:space-y-4 lg:pt-[118px]">
        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="col-span-1 row-span-3 h-full max-h-full w-full self-center rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>

        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="col-span-1 col-start-2 row-span-3 h-full max-h-full w-full self-center rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>

      <div className="row-span-6 self-center pt-[26px]">
        <div className="aspect-[80/95] w-auto min-w-20">
          <img className="h-full max-h-full w-full rounded-2xl bg-[#C8C8C8] object-cover md:rounded-3xl lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
