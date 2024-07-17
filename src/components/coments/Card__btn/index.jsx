export default function Card__btn(){
    return(
        <>
            <div className='justify-self-end flex gap-2 '>
                <button className='text-[18px] rounded-[8px] bg-btn-secondary w-[105px] h-[36px] dark:bg-btn-primary dark:text-white-two'>Confirmar</button>
                <button className='text-[18px] rounded-[8px] w-[105px] h-[36px] border-[1px] border-btn-secondary dark:border-btn-primary dark:text-white-two'>Limpar</button>    
            </div>
        </>
    )
}