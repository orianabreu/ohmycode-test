import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Menu.styles';

export default function AppMenu() {
  return (
    <S.NavBar>
      <Link to='/'>Todos List</Link>
      <Link to='/create-your-todos'>Create your Todos</Link>
    </S.NavBar>
  );
}
