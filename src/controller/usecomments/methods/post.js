export const postOneComments = async (api, data) =>{
  const reponse = await api.post("api/comments", data);
  return reponse.data
}