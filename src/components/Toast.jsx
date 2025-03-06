import { useToast } from "../hooks/useToast";

const Toast = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fadeIn"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;