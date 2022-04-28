import React from 'react';

import * as S from './CreateTodo.styles';
import Header from '../../components/Header/Header';
import bgLight from '../../assets/images/bg-desktop-light.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CreateTodoArea from '../../components/CreateTodoArea/CreateTodoArea';
import MyTodos from '../../components/MyTodos/MyTodos';

export default function CreateTodo() {
  return (
    <>
        <Header src={bgLight}/>
        <S.CreateAreaWrapper>
            <SectionTitle>Create your todos</SectionTitle>
            <CreateTodoArea />
        </S.CreateAreaWrapper>
        <MyTodos />
    </>
  )
}
