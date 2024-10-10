import axios from "axios";
import { useState } from "react";

export function useAxiosPost(url) {
  const [loading, setLoading] = useState(false);
  async function PostComments(body) {
    setLoading(true);
    await axios
      .post(url, body, {
        timeout: 5000,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Obrigado pelo feedback! a pagina será reiniciada...");

          location.reload();
        }
      })
      .catch((error) => console.log(`Erro encontrado: ${error}`));
  }
  return { PostComments, loading };
}
