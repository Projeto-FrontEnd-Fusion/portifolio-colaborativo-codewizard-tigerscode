import { fetchAllComments } from "./methods/get"
import { postOneComments } from "./methods/post"

export class ServiceComments {
  fetchComments = async (api) => await fetchAllComments(api)
  postComments = async (api, data) => await postOneComments(api, data)
}