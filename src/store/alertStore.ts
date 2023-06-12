import create from "zustand";

interface Alert {
  status: "error" | "loading" | "success" | "info" | "warning" | undefined;
  message: string;
  setStatus: (newStatus: Alert["status"]) => void;
  setMessage: (newMessage: string) => void;
  reset: () => void;
}

export const useAlertStore = create<Alert>((set) => ({
  status: undefined,
  message: "",
  setStatus: (newStatus: Alert["status"]) => set({ status: newStatus }),
  setMessage: (newMessage: string) => set({ message: newMessage }),
  reset: () => set({ status: undefined, message: "" }),
}));
