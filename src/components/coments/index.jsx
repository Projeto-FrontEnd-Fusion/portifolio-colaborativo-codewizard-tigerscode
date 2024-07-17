import Card from "./Card"
import PostComent from "./post_you_coment"
export default function App(){
    return(
        <>
            <h2 className="text-center text-dark-bg font-title font-bold text-[31px] mb-2 dark:bg-dark-bg dark:text-white-two ">Comentários e avaliações</h2>
            <div className="container_section_coments flex justify-center flex-wrap gap-4 p-3 mb-2">
                {[...Array(3)].map(cards =>{
                    return(
                        <Card />            
                    )
                })}
            </div>

            <PostComent />
        </>
    )
}