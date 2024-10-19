import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ServiceComments } from "../controller/usecomments/comments";
import { useHTTPComments } from "../controller/usecomments/useHTTP";
import { useTeamStore } from "../store/useTeamStore";
import { useCallback, useMemo } from "react";

class MembersApi {
  constructor(api) {
    this.api = api;
  }

  async fetchAllMembers() {
    try {
      const service = new ServiceComments();
      return await service.fetchAllMembers(this.api);
    } catch (error) {
      throw new Error(`Falha ao Buscar Membros: ${error.message}`);
    }
  }
}

const MEMBERS_QUERY_KEY = ["membros"];
const DEFAULT_CONFIG = {
  staleTime: 5 * 60 * 1000, 
  cacheTime: 30 * 60 * 1000, 
  retry: 3,
};

export const useFetchMembers = (config = {}) => {

  const api = useHTTPComments();
  const queryClient = useQueryClient();
  const membersApi = useMemo(() => new MembersApi(api), [api]);

  const invalidateMembers = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY });
  }, [queryClient]);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: MEMBERS_QUERY_KEY,
    queryFn: () => membersApi.fetchAllMembers(),
    staleTime: DEFAULT_CONFIG.staleTime,
    cacheTime: DEFAULT_CONFIG.cacheTime,
    retry: DEFAULT_CONFIG.retry,
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.error(`Erro ao Buscar Membros`, error);
    },
  });

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    invalidateMembers,
  };
};
