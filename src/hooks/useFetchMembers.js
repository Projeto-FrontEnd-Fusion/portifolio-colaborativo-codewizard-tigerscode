import { useQuery } from "@tanstack/react-query";
import { ServiceComments } from "../controller/usecomments/comments";
import { useHTTPComments } from "../controller/usecomments/useHTTP"

const fetchMembers = async () => {
  const api = useHTTPComments()
  const getMember = new ServiceComments();
  return await getMember.fetchAllMembers(api)
}

export const useFetchMembers = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: fetchMembers,
    queryKey: ["get-all-members"]
  })
  return {
    data,
    isLoading,
    isError
  }
}