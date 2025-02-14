import { useState } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../context/TodoContext";
import { SAMPLE_TODOS } from "../constants/sample-todos";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const handlesUpdated = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleDelete,
        handlesUpdated,
        addTodos,
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
