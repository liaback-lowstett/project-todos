import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "../reducers/todos";

const TodoFrom = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,
    };

    dispatch(todos.actions.addTodo(newTodo));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit"> Add task </button>
    </form>
  );
};

export default TodoFrom;
