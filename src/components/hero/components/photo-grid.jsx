import { useState } from "react";
import PhotoGridSkeleton from "./photo-grid-skeleton";
import { useFetchMembers } from "../../../hooks/useFetchMembers";

const PhotoGrid = () => {
/*
A função handleMouseEnter e handleMouseLeave, assim como a criação do estado hoveredIndex, podem ser substituídas pela utilização da classe "group" do Tailwind CSS. Isso elimina a necessidade de scripts adicionais e reduz a quantidade de código no arquivo (photo-grid.jsx).
*/


  const {data, isLoading} = useFetchMembers()

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <section className="w-full md:px-20 lg:w-auto lg:px-0 lg:py-20">
      {
        isLoading && (
          <PhotoGridSkeleton />
        )
      }
      
      <div className="grid grid-flow-col grid-cols-4 items-center gap-2 py-0 md:gap-3 lg:gap-4">
        {
          data?.people?.map((person, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={
                `relative aspect-[80/95] min-w-14 max-w-40
                ${index === 0 && "row-span-2"} 
                ${index === 1 || index === 2 ? "lg:bottom-20" : ""} 
                ${index === 3 || index === 4 ? "top-4 lg:top-10" : ""} 
                ${index === 5 && "top-4 lg:top-0 lg:block"}`
              }
            >
              <img
                src={person.githubImgUrl}
                alt={person.name}
                className={
                  `h-full w-full rounded-2xl object-cover cursor-pointer lg:rounded-[32px] transition-all duration-500 ease-in-out
                  ${ hoveredIndex === null ? "" : index === hoveredIndex ? "scale-105 shadow-lg" : "grayscale" }`
                }
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default PhotoGrid;
