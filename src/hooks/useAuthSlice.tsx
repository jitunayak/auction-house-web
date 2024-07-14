import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  preferences: string[];
  isAuthenticated: boolean;
};

type Store = {
  user: IUser;
  setUser: (user: IUser) => void;
  onboardingStage: number;
  nextStage: () => void;
  prevStage: () => void;
  reset: () => void;
};

const createStore = persist<Store>(
  (set) => ({
    user: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      countryCode: "",
      preferences: [] as string[],
      isAuthenticated: false,
    },
    setUser: (user) => set({ user }),
    onboardingStage: 0,
    nextStage: () =>
      set((state) => ({ onboardingStage: state.onboardingStage + 1 })),
    prevStage: () =>
      set((state) => ({ onboardingStage: state.onboardingStage - 1 })),
    reset: () => set((state) => ({ onboardingStage: 0, user: state.user })),
  }),
  {
    name: "auth",
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useAuthSlice = create(createStore);
