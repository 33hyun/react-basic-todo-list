import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useToastStore = create(
  immer((set) => ({
    toasts: [],

    addToast: (message, duration = 3000) => {
      set((state) => {
        const toastId = crypto.randomUUID();
        state.toasts.push({ id: toastId, message });

        // ⏳ 일정 시간이 지나면 자동으로 삭제
        setTimeout(() => {
          set((state) => {
            state.toasts = state.toasts.filter((toast) => toast.id !== toastId);
          });
        }, duration);
      });
    },

    removeToast: (toastId) => {
      set((state) => {
        state.toasts = state.toasts.filter((toast) => toast.id !== toastId);
      });
    },
  }))
);