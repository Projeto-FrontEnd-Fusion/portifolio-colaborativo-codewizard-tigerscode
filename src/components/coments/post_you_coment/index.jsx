import Card__btn from "../Card__btn";
import Coment from "../Coment";
import { Form } from "../Form";

import User from "../User";

export default function PostComent() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-3">
      <h2 className="text-dark-bg mb-5 border-b-[2px] border-black text-center font-subtitle text-[31px] font-bold dark:border-white-two dark:text-white-two w-[85%] md:w-auto">
        Deixe o seu Comentário
      </h2>
      <div className="flex w-[95%] xl:w-4/5 md:h-[300px] items-center justify-center md:gap-8">
        <Form />  
        <div className="hidden md:block w-1/2 h-full">
          <div className="md:container_coment flex flex-col items-start md:justify-center md:rounded-md md:p-5 md:shadow-xl dark:bg-primary-muted w-full h-full">
            <Coment />
            <User />
            <div className="self-end">
              <Card__btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
