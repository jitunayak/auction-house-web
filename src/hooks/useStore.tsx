import { create } from "zustand";
import { useAuthSlice } from "./useAuthSlice";

export const useStore = create((...a) => ({
  ...useAuthSlice(...a),
  // Add any additional properties here
}));
