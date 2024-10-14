// Componente de usuário do comentario
import { useState } from "react";
export default function User({ name, email }) {
  const [user, setUser] = useState({
    user_image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkX45a1tQQSUinM5dJtlJOkozGxinV0_mRRPRmIXi3dvnqSyRm",
  });
  return (
    <>
      <div className="container_user_component flex content-center justify-center gap-1 p-2">
        <div
          className="image_user h-[56px] w-[56px] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${user.user_image})` }}
        ></div>
        <div className="container_text flex w-32 flex-wrap">
          <label className="name_user text-dark-bg font-body text-lg font-bold dark:text-white-two">
            {name}
          </label>
          <label className="title_user text-dark-bg font-body text-xs dark:text-white-two">
            {email}
          </label>
        </div>
      </div>
    </>
  );
}
