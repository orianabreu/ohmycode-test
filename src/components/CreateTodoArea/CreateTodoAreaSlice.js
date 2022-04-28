import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  todoTitle: '',
  todoCompleted: '',
};

export const createTodoAreaSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    UPDATE_FORM_STATE: (state, action) => {
        state[action.fieldName] = action.payload;
      },
  }
});

export const { UPDATE_FORM_STATE } = createTodoAreaSlice.actions;

export default createTodoAreaSlice.reducer;
