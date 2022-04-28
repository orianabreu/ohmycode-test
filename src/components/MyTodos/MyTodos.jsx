import React from 'react';
import { useSelector } from 'react-redux';

import CustomTodo from '../CustomTodo/CustomTodo';

import * as S from './MyTodos.styles';

export default function MyTodos() {
  const { todos } = useSelector((state) => state.createTodo);

  return (
    todos.length > 0 && (
      <S.MyTodosContainer>
        <S.CustomLegend>
          <p>userID</p>
          <p>Title</p>
          <p className='completed'>Completed</p>
          <p className='delete-task'>Delete Task</p>
        </S.CustomLegend>
        {todos.map((todo) => {
          console.log(todo);
          return (
            <CustomTodo
              key={todo.id}
              id={todo.id}
              userId={todo.userId}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })}
      </S.MyTodosContainer>
    )
  );
}
