import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from '@mui/icons-material/Delete';

import * as S from "./CustomTodo.styles";
import { IconContainer } from "../Todo/Todo.styles";

export default function CustomTodo({ id, userId, title, completed }) {
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
        <DeleteIcon fontSize="small"/>
      </S.DeleteBtnContainer>
  </S.CustomTodoBox>
  );
}
