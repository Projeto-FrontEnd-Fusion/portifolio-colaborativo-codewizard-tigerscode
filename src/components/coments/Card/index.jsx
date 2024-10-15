import { useComments } from "../../../hooks/useComments";
import Ratting from "../Ratting";
import User from "../User";

export default function Card() {
  const { data, isPending } = useComments();

  if(isPending) return <span>Carregando....</span>

  return (
    <>
{
  data.map(({name, comment, email}, index) =>(
    <div key={index} className="container_card flex h-[25rem] w-[24.7rem] flex-col items-start gap-[40px] rounded-2xl p-[36px] shadow-xl dark:bg-primary-muted">
    <Ratting />
    <div className="container_coment">
      <p className="text-dark-bg h-40 w-80 font-body text-base dark:text-white-two">
        {comment}
      </p>
    </div>
    <User email={email} name={name} />
  </div>
  ))
}
    </>
  );
}
