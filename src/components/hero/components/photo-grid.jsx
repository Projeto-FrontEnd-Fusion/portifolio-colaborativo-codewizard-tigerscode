const PhotoGrid = () => {
    return (
        <section className="grid grid-rows-6 grid-cols-4 gap-2 mt-[43px] m-auto lg:m-0 w-[344px] lg:w-[688px] py-[15px] lg:gap-4">
            {
                //TODO: colocar as imagens quando disponíveis
            }
            <div className="row-span-6 self-center">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover" />
            </div>

            <div className="row-span-6 self-center space-y-2 lg:space-y-4 lg:pb-[116px]">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover row-span-3 col-span-1 self-center" />
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover row-span-3 col-span-1 col-start-2 self-center" />
            </div>

            <div className=" row-span-6 self-center space-y-2 pt-[15px] lg:space-y-4 lg:pt-[118px]">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover row-span-3 col-span-1 self-center" />
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover row-span-3 col-span-1 col-start-2 self-center" />
            </div>

            <div className=" row-span-6 self-center pt-[26px]">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 lg:h-[190px] lg:w-40 rounded-2xl lg:rounded-[32px] object-cover " />
            </div>

        </section>
     );
}
 
export default PhotoGrid;