export const fetchAllComments = async (api) => {
  const response = await api.get('/api/comments')
  return response.data
}


export const fetchMembers = async (api) => {
  const response = await api.get("/api/TigerCoders");
  return response.data
}