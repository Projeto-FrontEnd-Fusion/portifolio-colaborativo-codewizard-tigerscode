export const postOneComments  = async (api) =>{
  const reponse = api.post("api/comments");
  return reponse.data
}