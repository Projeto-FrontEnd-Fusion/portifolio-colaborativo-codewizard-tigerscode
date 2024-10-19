// // types.ts
// interface Member {
//   id: string;
//   // ... outros campos
// }

// interface QueryConfig {
//   staleTime?: number;
//   cacheTime?: number;
//   retry?: number;
// }

// // api/members.ts
// class MembersAPI {
//   constructor(private api: ReturnType<typeof useHTTPComments>) {}

//   // Método para buscar todos os membros
//   async fetchAllMembers(): Promise<Member[]> {
//     try {
//       const service = new ServiceComments();
//       // Faz a requisição para obter os membros
//       return await service.fetchAllMembers(this.api);
//     } catch (error) {
//       // Tratamento de erro detalhado
//       if (error instanceof Error) {
//         throw new Error(`Falha ao buscar membros: ${error.message}`);
//       }
//       throw error;
//     }
//   }
// }

// // hooks/useMembers.ts
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { useCallback, useMemo } from 'react';

// // Chave única para identificar a query de membros
// const MEMBERS_QUERY_KEY = ['members'] as const;

// // Configurações padrões da query, usadas para otimizar o cache e o tempo de vida dos dados
// const DEFAULT_CONFIG: QueryConfig = {
//   staleTime: 5 * 60 * 1000, // 5 minutos de dados frescos (Performance)
//   cacheTime: 30 * 60 * 1000, // 30 minutos no cache (Escalabilidade)
//   retry: 3 // Tentativa de até 3 vezes em caso de falha (Escalabilidade)
// };

// export const useFetchMembers = (config?: QueryConfig) => {
//   const api = useHTTPComments();
//   const queryClient = useQueryClient();

//   // Memoiza a instância de API para evitar recriações desnecessárias (Performance)
//   const membersAPI = useMemo(() => new MembersAPI(api), [api]);

//   // Função de prefetch para antecipar a busca de dados (Performance)
//   const prefetchMembers = useCallback(() => {
//     queryClient.prefetchQuery({
//       queryKey: MEMBERS_QUERY_KEY,
//       queryFn: () => membersAPI.fetchAllMembers(),
//       ...DEFAULT_CONFIG,
//       ...config
//     });
//   }, [queryClient, membersAPI, config]);

//   // Invalida os dados de membros no cache, forçando um refetch (Escalabilidade)
//   const invalidateMembers = useCallback(() => {
//     queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY });
//   }, [queryClient]);

//   // Configura a query principal para buscar e gerenciar os membros
//   const query = useQuery({
//     queryKey: MEMBERS_QUERY_KEY,
//     queryFn: () => membersAPI.fetchAllMembers(),
//     staleTime: config?.staleTime ?? DEFAULT_CONFIG.staleTime, // Configuração de cache
//     cacheTime: config?.cacheTime ?? DEFAULT_CONFIG.cacheTime, // Configuração de cache
//     retry: config?.retry ?? DEFAULT_CONFIG.retry, // Tentativas de refetch em caso de erro
//     refetchOnWindowFocus: false, // Evita refetch sempre que o foco da janela mudar (Performance)
//     select: useCallback((data: Member[]) => {
//       // Transforma os dados para ordená-los por ID (Manutenibilidade)
//       return data.sort((a, b) => a.id.localeCompare(b.id));
//     }, []),
//     onError: (error) => {
//       // Tratamento centralizado de erro (Manutenibilidade)
//       console.error('Erro ao buscar membros:', error);
//     }
//   });

//   return {
//     ...query,
//     members: query.data ?? [], // Dados dos membros ou array vazio (segurança)
//     prefetchMembers,
//     invalidateMembers,
//     // Helpers adicionais para melhor controle da query
//     isLoadingFirstTime: query.isLoading, // Indica se a primeira carga de dados está acontecendo
//     isRefetching: query.isFetching && !query.isLoading, // Indica se há um refetch sem carregar do zero
//     refetchMembers: query.refetch // Função para refazer a query manualmente
//   };
// };

// // Componente de uso
// export const MembersList = () => {
//   const { 
//     members,
//     isLoadingFirstTime,
//     isRefetching,
//     isError,
//     error,
//     refetchMembers,
//     invalidateMembers
//   } = useFetchMembers({
//     staleTime: 10 * 60 * 1000 // Configuração sobrescrita, se necessário (Personalização)
//   });

//   // Função para realizar o prefetch de detalhes de membros ao passar o mouse (Performance)
//   const handleRowHover = (memberId: string) => {
//     queryClient.prefetchQuery({
//       queryKey: ['member', memberId],
//       queryFn: () => membersAPI.fetchMemberDetails(memberId)
//     });
//   };

//   return (
//     <div>
//       {isLoadingFirstTime && <LoadingSpinner />} {/* Carregando pela primeira vez */}
//       {isRefetching && <RefreshIndicator />} {/* Indicador de refetch */}
//       {isError && <ErrorMessage error={error} />} {/* Mensagem de erro */}

//       <button onClick={() => refetchMembers()}>Atualizar</button> {/* Botão de refetch manual */}

//       {members.map(member => (
//         <div 
//           key={member.id}
//           onMouseEnter={() => handleRowHover(member.id)} // Prefetch de detalhes no hover
//         >
//           {/* Conteúdo do membro */}
//         </div>
//       ))}
//     </div>
//   );
// };

// Exemplo

// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { ServiceComments } from "../controller/usecomments/comments";
// import { useHTTPComments } from "../controller/usecomments/useHTTP"
// import { useCallback, useMemo } from "react";

// // const fetchMembers = async () => {
// //   const api = useHTTPComments()
// //   const getMember = new ServiceComments();
// //   return await getMember.fetchAllMembers(api)
// // }

// class MembersApi {
//   constructor(api) {
//     api.this = api
//   }
//   async fetchAllMembers() {
//     try {
//       const service = new ServiceComments();
//       return await service.fetchAllMembers(this.api)
//     } catch (error) {
//       throw new Error(`Falha ao buscar membro, ${error.message}`)
//     }
//   }
// }

// const MEMBERS_QUERY_KEY = ["members"];
// const DEFAULT_CONFIG = {
//   staleTime: 5 * 60 * 1000,
//   cacheTime: 30 * 60 * 1000,
//   retry: 3
// }

// export const useFetchMembers = ({ DEFAULT_CONFIG }) => {

//   const api = useHTTPComments()
//   const queryCLient = useQueryClient()

//   const membersApi = useMemo(() => new MembersApi(api), [api])
//   const invalidateMembers = useCallback(() => {
//     queryCLient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY });
//   }, [queryCLient])

//   // const { data, isLoading, isError } = useQuery({
//   //   queryFn: fetchMembers,
//   //   queryKey: ["get-all-members"]
//   // })

//   const query = useQuery({
//     queryKey: MEMBERS_QUERY_KEY,
//     queryFn: () => membersApi.fetchAllMembers(),
//     staleTime: DEFAULT_CONFIG.staleTime,
//     gcTime: DEFAULT_CONFIG.cacheTime,
//     retry: DEFAULT_CONFIG.retry,
//     refetchOnWindowFocus: false,
//     onError: (error) => {
//       console.error(`Erro ao Buscar membros, ${error.message}`)
//     }
//   })


//   return {
//     query,
//     membes: query.data ?? [],
//     invalidateMembers,
//     isLoadind: query.isLoading,
//   }
// }