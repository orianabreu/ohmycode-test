import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import UsersSelect from '../UsersSelect/UsersSelect';
import * as S from './CreateTodoArea.styles';

export default function CreateTodoArea() {
  return (
    <S.Form>
        <UsersSelect defaultValue="userID"/>
        <S.Input type='text' placeholder='what do you have to do?'/>
        <S.CompletedTodoSelect>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </S.CompletedTodoSelect>
        <S.AddButton>
            <AddIcon fontSize='medium'/>
        </S.AddButton>
    </S.Form>
  )
}
