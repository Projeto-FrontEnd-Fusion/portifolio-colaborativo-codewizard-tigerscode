import Coment from '../Coment'
import User from '../User'
import Form from '../Form'
import Card__btn from '../Card__btn'

export default function PostComent(){
    return(
        < >
            
            <div className="flex flex-col items-center gap-[10px] mb-3">
                <h2 className="text-center text-dark-bg font-subtitle font-bold text-[31px] mb-5 border-b-[2px] border-black w-[500px] mx-8  dark:text-white-two dark:border-white-two">Deixe o seu Comentário</h2>
                <div className="grid grid-cols-auto gap-10  md:grid-cols-2">
                    <Form/>
                    <div className='hidden md:block'>
                        <div className="md:container_coment md:grid md:grid-rows-auto md:gap-4 md:w-[507px] md:p-[36px] md:h-[380px] md:shadow-xl md:rounded-md dark:bg-primary-muted">
                            <Coment/>
                            <div className='justify-self-start'><User /></div>
                            <Card__btn/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}