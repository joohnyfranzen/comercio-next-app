import create from "zustand";

type AdminAuthState = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

let initialState = { isAuthenticated: false };

if (typeof window !== "undefined" && window.localStorage) {
  const storedValue = localStorage.getItem("isAuthenticated");
  initialState = {
    isAuthenticated: storedValue ? storedValue === "true" : false,
  };
}

export const UseAdminAuthStore = create<AdminAuthState>((set) => ({
  ...initialState,
  setIsAuthenticated: (value) => {
    set({ isAuthenticated: value });
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("isAuthenticated", value.toString());
    }
  },
}));
