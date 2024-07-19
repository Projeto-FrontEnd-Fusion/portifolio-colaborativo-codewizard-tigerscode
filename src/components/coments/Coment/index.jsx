// Texto do comentario 
import { useState } from "react"


export default function Coment(){
    
    const [coment,setComent] = useState({
        id:null,
        content:'"Vejo um potencial incrível no Frontend Fusion. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."',
        user:null
    })
    
    return(
        <>
            <div className="container_coment">
                <p className="font-body text-dark-bg text-base w-80 h-40 dark:text-white-two">
                    {coment.content}
                </p>
            </div>
        
        </>
    )
}