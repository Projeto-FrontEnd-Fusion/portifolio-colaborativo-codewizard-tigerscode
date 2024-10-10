import { FaRegCircleUser } from "react-icons/fa6";
import { useRef } from "react";
import { useAxiosPost } from "../../hook/post";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const name = useRef();
  const email = useRef();
  const comment = useRef();

  const { PostComments, loading } = useAxiosPost(
    "https://api-comentarios-tigerscoders.onrender.com/api/comments",
  );

  const handlePost = () => {
    const newComment = {
      id: uuidv4(),
      name: name.current.value,
      githubUser: "DaviSC17",
      email: email.current.value,
      comment: comment.current.value,
      createDate: new Date(),
    };

    PostComments(newComment);
  };

  return (
    <>
      <div className="flex h-[336px] w-[475px] flex-col items-center justify-center gap-1 p-2 md:flex md:flex-col md:gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            ref={name}
            placeholder="Nome"
            className="border-btn-secondary focus: h-[56px] w-[324px] rounded-[8px] border-[1px] px-[32px] py-[10px] text-white-two outline-none md:w-[295px] dark:bg-dark-bg"
          ></input>
          <div className="dark:bg-dark-bg-two hidden md:flex md:h-[56px] md:w-[160px] md:items-center md:justify-center md:gap-1 md:rounded-[8px] md:bg-dark-bg md:p-1">
            {" "}
            <FaRegCircleUser className="md:text-light-bg hidden text-white-two md:block dark:text-white-two" />
            <button className="hidden text-white-two md:block dark:text-white-two">
              Upload
            </button>
          </div>
        </div>
        <input
          type="text"
          ref={email}
          placeholder="Seu e-mail"
          className="border-btn-secondary focus: h-[56px] w-[324px] rounded-[8px] border-[1px] px-[32px] py-[10px] text-white-two outline-none md:w-[475px] dark:bg-dark-bg"
        ></input>
        <textarea
          ref={comment}
          placeholder="Comentário"
          className="border-btn-secondary focus: h-[182px] w-[324px] resize-none rounded-[8px] border-[1px] px-[32px] py-[10px] text-white-two outline-none md:w-[475px] dark:bg-dark-bg"
        ></textarea>
        <div className="md:hidden">
          <div className="flex gap-2 justify-self-end">
            <button
              onClick={handlePost}
              className="h-[36px] w-[105px] rounded-[8px] bg-btn-secondary text-[18px] dark:bg-btn-primary dark:text-white-two"
            >
             {loading ? "Enviando..." : "Confirmar"}
            </button>
            <button className="border-btn-secondary dark:border-btn-primary h-[36px] w-[105px] rounded-[8px] border-[1px] text-[18px] dark:text-white-two">
              Limpar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
