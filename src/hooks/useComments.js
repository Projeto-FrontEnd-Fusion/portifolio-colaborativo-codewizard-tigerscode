import { ServiceComments } from "../controller/usecomments/comments"
import { useHTTP } from "../controller/usecomments/useHTTP"
import {  useQuery } from "@tanstack/react-query"

const comments = async () => {
  const api = useHTTP()
  const fetch = new ServiceComments()
  const response =  await fetch.fetchComments(api)
  return response
  
  
}

export const useComments = () => {
  const { data, isSuccess, isPending } = useQuery({
    queryFn: comments,
    queryKey: ["get-comments"]
  })

  return {
    data,
    isSuccess,
    isPending
  }
}