import React from "react";

import * as S from "./TodosList.styles";
import ApiTodos from "../../components/ApiTodos/ApiTodos";
import Header from "../../components/Header/Header";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import bgDark from "../../assets/images/bg-desktop-dark.jpg";
import UsersSelect from "../../components/UsersSelect/UsersSelect";

export default function TodosList() {
  return (
    <>
      <Header src={bgDark} />
      <S.Wrapper>
        <SectionTitle>Todo List</SectionTitle>
        <UsersSelect />
      </S.Wrapper>
      <ApiTodos />
    </>
  );
}
