import { FaRegCircleUser } from "react-icons/fa6";
import Card__btn from "../Card__btn";

export default function Form(){
    return(
        <>
            <div className="w-[475px] h-[336px] flex flex-col justify-center items-center gap-1 md:flex md:flex-col md:gap-4 p-2">
                <div className='flex gap-4'>
                    <input type='text' placeholder='Nome' className='w-[324px] h-[56px] px-[32px] py-[10px] rounded-[8px] border-[1px] border-btn-secondary focus: outline-none dark:bg-dark-bg text-white-two md:w-[295px]'></input>
                    <div className='hidden md:flex md:gap-1 md:p-1 md:justify-center md:items-center md:bg-dark-bg md:w-[160px] md:h-[56px] md:rounded-[8px] dark:bg-dark-bg-two'> <FaRegCircleUser className='hidden text-white-two md:block md:text-light-bg dark:text-white-two'/><button className='hidden md:block text-white-two dark:text-white-two'>Upload</button></div>
                </div>
                <input type='text' placeholder='Seu e-mail' className='w-[324px] md:w-[475px] h-[56px] px-[32px] py-[10px] rounded-[8px] border-[1px] border-btn-secondary focus: outline-none  dark:bg-dark-bg text-white-two'></input>     
                <textarea placeholder='Comentário' className='w-[324px] md:w-[475px] h-[182px] px-[32px] py-[10px] rounded-[8px] border-[1px] border-btn-secondary focus: outline-none  dark:bg-dark-bg text-white-two resize-none' ></textarea>
                <div className="md:hidden" >
                    <Card__btn/>
                </div>
                        
            </div>
        </>
    )
}