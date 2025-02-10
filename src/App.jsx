import RootLayout from "./components/layout/RootLayout.jsx";
import TodoContainer from "./components/todo/TodoContainer";

const App = () => {
  return (
    <RootLayout>
      <TodoContainer />
    </RootLayout>
  );
};

export default App;