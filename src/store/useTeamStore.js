import { create } from "zustand";

export const useTeamStore = create((set) => ({
    teamData: {}, 
    isLoading: false, 
    setLoading: (loading) => set({ isLoading: loading }),
    fetchTeamData: (data) => set({ teamData: data, isLoading: false }),
}));
