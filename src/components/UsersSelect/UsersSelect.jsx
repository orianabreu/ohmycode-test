import React from 'react';

import * as S from './UsersSelect.styles';

export default function UsersSelect({ defaultValue, handleChange }) {
  return (
    <>
      <S.Select
        name='userId'
        defaultValue={'default'}
        onChange={handleChange}>
        <option value={'default'} disabled hidden>
          {defaultValue}
        </option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </S.Select>
    </>
  );
}
