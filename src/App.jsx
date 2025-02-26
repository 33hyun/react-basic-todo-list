import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import RootLayout from "./components/layout/RootLayout"; 
import Home from "./pages/Home"; 
import TodoDetail from "./pages/TodoDetail"; 
import QueryProvider from "./components/provider/QueryProvider"; 

const App = () => {
  return (
    <QueryProvider> {/* React Query를 전역적으로 적용 */}
      <BrowserRouter>
        <Routes>
          {/* 레이아웃을 포함하는 메인 라우트 */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} /> {/* 메인 페이지 */}
            <Route path="todos/:id" element={<TodoDetail />} /> {/* 상세 페이지 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
};

export default App;