import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import * as S from "./ApiTodos.styles";
import Todo from "../Todo/Todo";

export default function ApiTodos() {
  const [todos, setTodos] = useState([]);
  const { userId } = useSelector(state => state.userIdSelect);
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

  useEffect(() => {
    if (userId >= 1) {
      axios.get(`${baseURL}?userId=${userId}`)
      .then(response => setTodos(response.data))
    }
  }, [userId]);

  return (
    <S.TodosContainer>
      <S.Legend>
        <p>userID</p>
        <p>Title</p>
        <p className="completed">Completed</p>
      </S.Legend>
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
      <S.GridFooter>
        <p>Total todos: {todos.length}</p>
      </S.GridFooter>
    </S.TodosContainer>
  );
}
