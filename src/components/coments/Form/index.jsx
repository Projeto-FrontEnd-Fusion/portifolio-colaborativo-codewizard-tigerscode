import Card__btn from "../Card__btn";

export default function Form() {
  return (
    <form  className="flex w-[90%] h-full flex-col items-center justify-between md:w-5/12 gap-4">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <input
          type="text"
          placeholder="Digite seu nome"
          className="border-blue-btn h-12 md:w-1/2 rounded-lg border-[1px] px-2 text-primary outline-none md:px-6 dark:bg-dark-bg dark:text-white-two"
        />
        <input
          type="text"
          placeholder="GitHub User"
          className="border-blue-btn h-12 md:w-1/2 rounded-lg border-[1px] px-2 text-primary outline-none md:px-6 dark:bg-dark-bg dark:text-white-two"
        />
      </div>
      <input
        type="email"
        placeholder="Digite seu email"
        className="border-blue-btn h-12 w-full rounded-lg border-[1px] px-2 text-primary outline-none md:px-6 dark:bg-dark-bg dark:text-white-two"
      />
      <textarea
        placeholder="Escreva seu comentário..."
        className="border-blue-btn h-44 w-full resize-none rounded-lg border-[1px] px-2 py-2 text-primary outline-none md:px-6 dark:bg-dark-bg dark:text-white-two"
      ></textarea>{" "}
      <div className="pt-3 md:hidden">
        <Card__btn />
      </div>
    </form>
  );
}
