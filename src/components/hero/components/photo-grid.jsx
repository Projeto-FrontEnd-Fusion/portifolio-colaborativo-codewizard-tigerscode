const PhotoGrid = () => {
  return (
    <section className="m-auto grid w-fit grid-cols-4 grid-rows-6 gap-2 py-[15px] lg:m-0 md:gap-3 lg:gap-4 scale-90 sm:scale-1">
      {
        //TODO: colocar as imagens quando disponíveis
      }
      <div className="row-span-6 self-center">
          <img
              className="h-[95px] w-20 md:w-28 md:h-[134px] rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]"
          />
      </div>

      <div className="row-span-6 space-y-2 self-center lg:space-y-4 lg:pb-[116px]">
        <img 
            className="col-span-1 row-span-3 h-[95px] w-20 md:w-28 md:h-[134.1875px] self-center rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" 
        />

        <img 
            className="col-span-1 col-start-2 row-span-3 h-[95px] w-20 md:w-28 md:h-[134.1875px] self-center rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" 
        />
      </div>

      <div className="row-span-6 space-y-2 self-center pt-[15px] lg:space-y-4 lg:pt-[118px]">
        <img 
            className="col-span-1 row-span-3 h-[95px] w-20 md:w-28 md:h-[134.1875px] self-center rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" 
        />

        <img 
            className="col-span-1 col-start-2 row-span-3 h-[95px] w-20 md:w-28 md:h-[134.1875px] self-center rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" 
        />
      </div>

      <div className="row-span-6 self-center pt-[26px]">
        <img 
            className="h-[95px] w-20 md:w-28 md:h-[134.1875px] rounded-2xl md:rounded-3xl bg-[#C8C8C8] object-cover lg:h-[190px] lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" 
        />
      </div>
    </section>
  );
};

export default PhotoGrid;
