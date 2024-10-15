import { setupAPI } from "./setupapi"

export const useHTTP = () => {
  const api = setupAPI(import.meta.env.VITE_URL)
  return api
}