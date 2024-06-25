import axios from "axios";
import { create } from "zustand";

export const useTeamStore = create((set) => ({
    teamData: {},
    isLoading: false,
    fetchTeamData: async () => {
        try {
            set({ isLoading: true });
            const response = await axios(
                "https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/TigerCoders",
            );

            const data = response.data;

            set({ teamData: data });
        } catch (error) {
            console.log("Error fetching data", error);
        } finally {
            set({ isLoading: false });
        }
    }
}));