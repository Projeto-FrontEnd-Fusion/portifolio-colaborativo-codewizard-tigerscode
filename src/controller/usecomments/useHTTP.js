import { setupAPI } from "./setupapi"

export const useHTTP = () => {
  const api = setupAPI(import.meta.env.VITE_URL)
  return api
}

export const useHTTPComments = () => {
  const api = setupAPI(import.meta.env.VITE_URL_TEAM)
  return api
}

