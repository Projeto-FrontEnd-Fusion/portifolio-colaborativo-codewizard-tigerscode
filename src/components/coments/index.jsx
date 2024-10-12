import Card from "./Card";
import PostComent from "./post_you_coment";
export default function App() {
  return (
    <>
      <h2 className="text-dark-bg mb-2 text-center font-title text-[31px] font-bold dark:bg-dark-bg dark:text-white-two">
        Comentários e avaliações
      </h2>
      <div className="container_section_coments mb-2 flex flex-wrap justify-center gap-4 p-3">
        {[...Array(3)].map((cards) => {
          return <Card />;
        })}
      </div>
      <div className="">
        <PostComent />
      </div>
    </>
  );
}
