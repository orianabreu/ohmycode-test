import React from "react";

import ApiTodos from "../../components/ApiTodos/ApiTodos";
import Header from "../../components/Header/Header";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import bgDark from "../../assets/images/bg-desktop-dark.jpg";
import UsersSelect from "../../components/UsersSelect/UsersSelect";

export default function TodosList() {
  return (
    <>
      <Header src={bgDark} />
      <SectionTitle>Todo List</SectionTitle>
      <UsersSelect />
      <ApiTodos />
    </>
  );
}
