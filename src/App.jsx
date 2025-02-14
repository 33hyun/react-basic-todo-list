import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoProvider from "./provider/TodoProvider";

const TodoListInit = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todos/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default TodoListInit;
