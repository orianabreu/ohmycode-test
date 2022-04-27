import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./UsersSelect.styles";
import { UPDATE_SELECT_STATE } from "./usersSelectSlice";

export default function UsersSelect() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state);

  return (
    <>
      <S.Select
        name='userId'
        value={userId}
        defaultValue={'default'}
        onChange={(e) =>
          dispatch(UPDATE_SELECT_STATE(e.target.value))
        }>
        <option value={'default'} disabled hidden>
          Filter by userId
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
