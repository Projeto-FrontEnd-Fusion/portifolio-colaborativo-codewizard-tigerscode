import { GiTigerHead } from "react-icons/gi";

const PhotoGridSkeleton = () => {
    return ( 
        <div className="grid grid-flow-col grid-cols-4 items-center gap-2 py-0 md:gap-3 lg:gap-4">
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 max-w-40 row-span-2 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="size-14 lg:size-20 text-gray-400" />
            </div>
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 max-w-40 lg:bottom-20 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="lg:size-20 text-gray-400" />
            </div>
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 max-w-40 lg:bottom-20 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="lg:size-20 text-gray-400" />
            </div>
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 max-w-40 top-4 lg:top-10 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="lg:size-20 text-gray-400" />
            </div>
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 max-w-40 top-4 lg:top-10 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="lg:size-20 text-gray-400" />
            </div>
            <div className="relative flex justify-center items-center aspect-[80/95] min-w-14 row-span-2 w-40 max-w-40 top-4 lg:top-0 lg:rounded-[32px] bg-gray-300 animate-pulse">
                <GiTigerHead className="lg:size-20 text-gray-400" />
            </div>
        </div>
     );
}
 
export default PhotoGridSkeleton;