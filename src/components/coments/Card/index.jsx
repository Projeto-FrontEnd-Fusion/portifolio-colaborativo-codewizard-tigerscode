import Ratting from "../Ratting";
import Coment from "../Coment";
import User from "../User";

export default function Card(){
    return(
        <>
            
            <div className="container_card w-[24.7rem] h-[25rem] p-[36px] rounded-2xl flex flex-col gap-[40px] items-start  shadow-xl dark:bg-primary-muted">
                <Ratting/>
                <Coment/>
                <User/>
            </div>
        </>
    )
}