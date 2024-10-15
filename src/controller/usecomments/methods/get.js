export const fetchAllComments = async (api) => {
  const response = await api.get('/api/comments')
  return response.data
}