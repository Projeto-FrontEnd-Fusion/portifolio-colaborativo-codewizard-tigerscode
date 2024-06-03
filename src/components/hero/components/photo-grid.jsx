const PhotoGrid = () => {
    return (
        <section className="grid grid-rows-6 grid-cols-4 gap-2 mt-[43px] w-[344px] py-[15px] m-auto">
            {
                //TODO: colocar as imagens quando disponíveis
            }
            <div className="row-span-6 self-center">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover" />
            </div>

            <div className="row-span-6 self-center space-y-2">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover row-span-3 col-span-1 self-center" />
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover row-span-3 col-span-1 col-start-2 self-center" />
            </div>

            <div className=" row-span-6 self-center space-y-2 pt-[15px]">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover row-span-3 col-span-1 self-center" />
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover row-span-3 col-span-1 col-start-2 self-center" />
            </div>

            <div className=" row-span-6 self-center pt-[26px]">
                <img className="bg-[#C8C8C8] dark:bg-[#221C3E] h-[95px] w-20 rounded-2xl object-cover " />
            </div>

        </section>
     );
}
 
export default PhotoGrid;