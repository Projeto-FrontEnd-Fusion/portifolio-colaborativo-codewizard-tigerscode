import axios from "axios"

export const setupAPI = (baseURL) => {

  const api = axios.create({
    baseURL,
    headers: { "Content-Type": "Application/json" }
  })

  return api

}