import React, { useState } from "react";

type TodoFormProps = {
  addTodo: (title: string) => void;
};

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
