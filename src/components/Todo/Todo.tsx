import React from "react";
import { Todo as TodoTypes } from "./Todo.types";

const Todo = ({ id, title, isCompleted }: TodoTypes) => {
  return (
    <div className="Todo">
      <p
        className={isCompleted ? "completed" : ""} // or completed className
      >
        {title}
      </p>
      <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
    </div>
  );
};

export default Todo;
