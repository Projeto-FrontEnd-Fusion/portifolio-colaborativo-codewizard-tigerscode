//TODO: colocar as imagens quando disponíveis
// import { useContext } from "react";
// import { TeamContext } from "../../../contexts/team-context";

const PhotoGrid = () => {
  //const { teamData } = useContext(TeamContext);

  return (
    <section className="w-full md:px-20 lg:w-auto lg:px-0 lg:py-20">
      <div className="grid grid-flow-col grid-cols-4 items-center gap-2 py-0 md:gap-3 lg:gap-4">
        <div className="relative row-span-2 aspect-[80/95] min-w-14 max-w-40">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
        <div className="relative aspect-[80/95] min-w-14 max-w-40 lg:bottom-20">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
        <div className="relative aspect-[80/95] min-w-14 max-w-40 lg:bottom-20">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
        <div className="relative top-4 aspect-[80/95] min-w-14 max-w-40 lg:top-10">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
        <div className="relative top-4 aspect-[80/95] min-w-14 max-w-40 lg:top-10">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
        <div className="relative top-4 row-span-2 aspect-[80/95] min-w-14 max-w-40 lg:top-0 lg:block">
          <img className="h-full w-full rounded-2xl bg-[#C8C8C8] object-cover lg:w-40 lg:rounded-[32px] dark:bg-[#221C3E]" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
