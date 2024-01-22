import React from "react";
import { Todo as TodoTypes } from "./Todo.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
  todo: TodoTypes;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

const Todo = ({ todo, removeTodo, toggleCompleted }: TodoProps) => {
  return (
    <div className="Todo">
      <p
        className={todo.isCompleted ? "completed" : ""} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
