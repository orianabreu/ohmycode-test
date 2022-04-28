import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';

import UsersSelect from '../UsersSelect/UsersSelect';
import * as S from './CreateTodoArea.styles';
import {
  UPDATE_TODO_COMPLETED,
  UPDATE_TODO_TITLE,
  UPDATE_SELECT_STATE,
  UPDATE_TODOS,
} from './CreateTodoAreaSlice';

export default function CreateTodoArea() {
  const dispatch = useDispatch();
  const { userId, todoTitle, todoCompleted } = useSelector((state) => state.createTodo);

  const handleSelectChange = (e) => {
    dispatch(UPDATE_SELECT_STATE(e.target.value));
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (todoTitle === "" || userId === "" || todoCompleted === "") {
      alert("Please, enter a task and fill out all fields")
      return;
    } 

    dispatch(
      UPDATE_TODOS({
        userId: userId,
        title: todoTitle,
        completed: todoCompleted
      })
    );
  };

  return (
    <S.Form onSubmit={addTodo}>
      <UsersSelect
        defaultValue='userID'
        value={userId}
        handleChange={handleSelectChange}
      />
      <S.Input
        type='text'
        placeholder='what do you have to do?'
        value={todoTitle}
        onChange={(e) => dispatch(UPDATE_TODO_TITLE(e.target.value))}
      />
      <S.CompletedTodoSelect
        value={todoCompleted}
        onChange={(e) => dispatch(UPDATE_TODO_COMPLETED(e.target.value))}>
        <option value='default' hidden>
          Select option
        </option>
        <option value='completed'>Completed</option>
        <option value='not-completed'>Not Completed</option>
      </S.CompletedTodoSelect>
      <S.AddButton type='submit'>
        <AddIcon fontSize='medium' />
      </S.AddButton>
    </S.Form>
  );
}
