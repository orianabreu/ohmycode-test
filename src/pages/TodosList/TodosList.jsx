import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './TodosList.styles';
import { UPDATE_SELECT } from '../../components/UsersSelect/usersSelectSlice';
import ApiTodos from '../../components/ApiTodos/ApiTodos';
import Header from '../../components/Header/Header';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import bgDark from '../../assets/images/bg-desktop-dark.jpg';
import UsersSelect from '../../components/UsersSelect/UsersSelect';

export default function TodosList() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state);

  const handleSelectChange = (e) => {
    dispatch(UPDATE_SELECT(e.target.value));
  };

  return (
    <>
      <Header src={bgDark} />
      <S.Wrapper>
        <SectionTitle>Todo List</SectionTitle>
        <UsersSelect defaultValue='Filter by userId' value={userId} handleChange={handleSelectChange}/>
      </S.Wrapper>
      <ApiTodos />
    </>
  );
}
