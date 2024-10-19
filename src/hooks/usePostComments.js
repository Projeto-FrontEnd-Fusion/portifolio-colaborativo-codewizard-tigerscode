import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { SchemaComments } from "../model/schema/commentsSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useHTTP } from "../controller/usecomments/useHTTP"
import { ServiceComments } from "../controller/usecomments/comments"

const postComments = async (data) => {
  const api = useHTTP()
  const setPost = new ServiceComments()
  return await setPost.postComments(api, data)
}

export const usePostComments = () => {
  const { handleSubmit, register, watch, formState: { errors }, reset , setError} = useForm({
    resolver: yupResolver(SchemaComments)
  })

  const query = useQueryClient();

  const setCommentsMutation = useMutation({
    mutationFn: postComments,
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["forms-comments"]
      })
    },
    onError: (error) => {
      const erroMsg = error.response.data.message
      setError("email",{message : erroMsg})
      console.log(erroMsg)
    }
  })
  
  const submitComments = (data) => {
    setCommentsMutation.mutate(data)
  }

  return {
    handleSubmit: handleSubmit(submitComments),
    register,
    watch,
    errors,
    reset,
    isSuccess: setCommentsMutation.isSuccess,
    isLoading: setCommentsMutation.isPending
  }
}