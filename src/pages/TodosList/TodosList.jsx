import React from "react";

import ApiTodos from "../../components/ApiTodos/ApiTodos";
import Header from "../../components/Header/Header";
import bgDark from "../../assets/images/bg-desktop-dark.jpg";

export default function TodosList() {
  return (
    <>
      <Header src={bgDark} />
      <ApiTodos />
    </>
  );
}
