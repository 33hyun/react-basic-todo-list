import { useState } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../../../context/TodoContext";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const toggleTodoCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        if (todo.id === id) {
          return false;
        }

        return true;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        toggleTodoCompleted,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;