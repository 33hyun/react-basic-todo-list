import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/Home";
import { TodoDetailPage } from "./pages/TodoDetail";
import { useThemeStore } from "./hooks/useThemeStore";
import { useEffect } from "react";
import RootLayout from "./components/layout/RootLayout";
import QueryProvider from "./components/provider/QueryProvider";

export const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    //현재 테마 초기화
    root.classList.remove("dark", "light");

    //테마 설정
    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todos/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;