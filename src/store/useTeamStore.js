import axios from "axios";
import { create } from "zustand";

export const useTeamStore = create((set) => ({
    teamData: {},
    isLoading: false,
    fetchTeamData: async () => {
        try {
            set({ isLoading: true });
            const response = await axios(
                "https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/",
            );

            const data = response.data;

            set({ teamData: data });
        } catch (error) {
            return null
        } finally {
            set({ isLoading: false });
        }
    }
}));