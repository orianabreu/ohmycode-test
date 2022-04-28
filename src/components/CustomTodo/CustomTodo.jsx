import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";

import * as S from "./CustomTodo.styles";
import { IconContainer } from "../Todo/Todo.styles";
import { DELETE_TODO } from "../CreateTodoArea/CreateTodoAreaSlice";

export default function CustomTodo({ id, userId, title, completed }) {
  const dispatch = useDispatch();

  const deleteTask = () => {
    console.log(id);
    dispatch(DELETE_TODO(id));
  }
  
  return (
  <S.CustomTodoBox>
      <p>{userId}</p>
      <p>{title}</p>
      <IconContainer>
          {completed === 'completed' ? (
              <CheckIcon fontSize="small"/>
          ) : (
              <ClearIcon fontSize="small"/>
          )}    
      </IconContainer>
      <S.DeleteBtnContainer>
        <DeleteIcon fontSize="small" onClick={deleteTask}/>
      </S.DeleteBtnContainer>
  </S.CustomTodoBox>
  );
}
