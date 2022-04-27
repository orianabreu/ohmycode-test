import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./ApiTodos.styles";
import Todo from "../Todo/Todo";

export default function ApiTodos() {
  const [todos, setTodos] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    let mounted = true;

    axios.get(baseURL).then((response) => {
      if (mounted) {
        setTodos(response.data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <S.TodosContainer>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}
          />
        );
      })}
    </S.TodosContainer>
  );
}
