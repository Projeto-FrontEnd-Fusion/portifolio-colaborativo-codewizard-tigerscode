import { useEffect } from "react";
import { usePostComments } from "../../../hooks/usePostComments";

export const Form = () => {
  const { handleSubmit, watch, register, errors, reset, isSuccess, isLoading } =
    usePostComments();

  const name = watch("name");
  const email = watch("email");
  const githubuser = watch("githubUser");
  const comments = watch("comment");

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <form
      className="flex flex-col justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nome"
        {...register("name")}
        value={name || ""}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input
        type="text"
        placeholder="Githubuser"
        {...register("githubUser")}
        value={githubuser || ""}
      />
      {errors.githubUser && <span>{errors.githubUser.message}</span>}

      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        value={email || ""}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea
        name=""
        id=""
        {...register("comment")}
        value={comments || ""}
      ></textarea>
      {errors.comment && <span>{errors.comment.message}</span>}

      <fieldset>
        <button
          disabled={isLoading ? true : false}
          className="h-[36px] w-[152px] rounded-[8px] bg-btn-primary text-[18px] md:w-[105px] dark:bg-btn-secondary dark:text-white-two"
        >
          {isLoading ? "Enviando ..." : "Confirmar"}
        </button>
        <button
          className="border-btn-secondary dark:border-btn-primary h-[36px] w-[152px] rounded-[8px] border-[1px] text-[18px] md:w-[105px] dark:text-white-two"
          onClick={() => reset()}
        >
          Limpar
        </button>
      </fieldset>
    </form>
  );
};
