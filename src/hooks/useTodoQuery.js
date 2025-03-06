import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../hooks/useToast"; 
import {
  addTodos,
  deleteTodo,
  getTodos,
  toggleTodoCompleted
} from "../components/api/todo-api";

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
    onError: () => {
      useToast().addToast("❌ 할 일 목록을 불러오는 데 실패했습니다.");
    }
  });
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast(); // ✅ Toast 훅 사용

  return useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      addToast("✅ 새로운 할 일이 추가되었습니다!");
      queryClient.invalidateQueries(["todos"]);
    },
    onError: () => {
      addToast("❌ 할 일 추가에 실패했습니다.");
    }
  });
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast(); // ✅ Toast 훅 사용

  return useMutation({
    mutationFn: ({ id, completed }) => toggleTodoCompleted(id, completed),
    onSuccess: () => {
      addToast(completed ? "✅ 완료된 할 일로 변경되었습니다!" : "❗ 할 일이 미완료 상태로 변경되었습니다.");
      queryClient.invalidateQueries(["todos"]);
    },
    onError: () => {
      addToast("❌ 할 일 상태 변경에 실패했습니다.");
    }
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast(); // ✅ Toast 훅 사용

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      addToast("🗑️ 할 일이 삭제되었습니다.");
      queryClient.invalidateQueries(["todos"]);
    },
    onError: () => {
      addToast("❌ 할 일 삭제에 실패했습니다.");
    }
  });
};