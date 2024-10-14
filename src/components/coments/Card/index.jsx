import Ratting from "../Ratting";
import Coment from "../Coment";
import User from "../User";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAxiosGet } from "../../hook/get";

export default function Card() {
  const { response } = useAxiosGet(
    "https://api-comentarios-tigerscoders.onrender.com/api/comments",
  );

  return (
    <>
      {response.map((data) => (
        <div className="container_card flex h-[25rem] w-[24.7rem] flex-col items-start gap-[40px] rounded-2xl p-[36px] shadow-xl dark:bg-primary-muted">
          <Ratting />
          <div className="container_coment">
            <p className="text-dark-bg h-40 w-80 font-body text-base dark:text-white-two">
              {data.comment}
            </p>
          </div>

          <User email={data.email} name={data.name} />
        </div>
      ))}
    </>
  );
}
