import { useToastStore } from "../store/toastStore";

export const useToast = () => {
  const { toasts, addToast, removeToast } = useToastStore();
  
  return { toasts, addToast, removeToast };
};