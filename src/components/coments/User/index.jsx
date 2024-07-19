// Componente de usuário do comentario
import { useState } from "react"
export default function User() {
    const [user, setUser] = useState({
        //imagem do perfil
        user_image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkX45a1tQQSUinM5dJtlJOkozGxinV0_mRRPRmIXi3dvnqSyRm',
        //nome do usuário
        user_name: 'Linus Torvalds',
        //titulo do usuario
        user_title: 'criador do linux'
    })
    return (
        <>
            <div className="container_user_component flex justify-center p-2 gap-1 content-center">
                <div className="image_user rounded-full bg-cover w-[56px] h-[56px] bg-center " style={{ backgroundImage: `url(${user.user_image})` }} ></div>
                <div className="container_text flex flex-wrap w-32">
                    <label className="name_user font-body font-bold text-lg text-dark-bg dark:text-white-two">{user.user_name}</label>
                    <label className="title_user font-body text-xs text-dark-bg dark:text-white-two">{user.user_title}</label>
                </div>
            </div>
        </>
    )
}