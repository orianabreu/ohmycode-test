import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import * as S from "./Todo.styles";

export default function Todo({ userId, title, completed }) {
  return (
  <S.TodoBox>
      <p>{userId}</p>
      <p>{title}</p>
      <S.IconContainer>
          {completed ? (
              <CheckIcon fontSize="small"/>
          ) : (
              <ClearIcon fontSize="small"/>
          )}    
      </S.IconContainer>
  </S.TodoBox>
  );
}
