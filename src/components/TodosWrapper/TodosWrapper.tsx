import React, { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import { Todo as TodoType } from "../Todo/Todo.types";

const TodosWrapper = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: crypto.randomUUID(), title: "Learn JS", isCompleted: true },
    { id: crypto.randomUUID(), title: "Learn React", isCompleted: false },
    { id: crypto.randomUUID(), title: "Learn TS", isCompleted: false },
    { id: crypto.randomUUID(), title: "Learn Redux", isCompleted: true },
  ]);

  const addTodo = (title: string) => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: string) => {
   //  setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}
      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodosWrapper;
