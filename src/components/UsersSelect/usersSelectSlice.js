import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
};

export const usersSelectSlice = createSlice({
  name: 'userIdSelect',
  initialState,
  reducers: {
    UPDATE_SELECT: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { UPDATE_SELECT } = usersSelectSlice.actions;

export default usersSelectSlice.reducer;
