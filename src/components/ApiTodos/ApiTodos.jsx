import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from "./ApiTodos.styles";

export default function ApiTodos() {
    const [todos, setTodos] = useState([]);
    const baseURL = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        axios.get(baseURL)
        .then(response => setTodos(response.data))
        return () => {
            
        };
    }, []);
  return (
    <S.TodosContainer>
        {todos.map((todo) => {
            return (
                <>
                    <p>{todo.userId}</p>
                    <p>{todo.title}</p>
                    <p>{todo.completed ? "true" : "false"}</p>
                </>
            )
        })}
    </S.TodosContainer>
  )
}
