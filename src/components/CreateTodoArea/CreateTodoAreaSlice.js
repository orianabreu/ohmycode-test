import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  todoTitle: '',
  todoCompleted: '',
  todos: [],
};

export const createTodoAreaSlice = createSlice({
  name: 'createTodo',
  initialState,
  reducers: {
    UPDATE_TODO_TITLE: (state, action) => {
      state.todoTitle = action.payload;
    },
    UPDATE_TODO_COMPLETED: (state, action) => {
      state.todoCompleted = action.payload;
    },
    UPDATE_SELECT_STATE: (state, action) => {
      state.userId = action.payload;
    },
    UPDATE_TODOS: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        userId: action.payload.userId,
        title: action.payload.title,
        completed: action.payload.completed
      }
      state.todos.push(newTodo);
      console.log(action);
    },
  },
});

export const {
  UPDATE_TODO_TITLE,
  UPDATE_TODO_COMPLETED,
  UPDATE_SELECT_STATE,
  UPDATE_TODOS,
} = createTodoAreaSlice.actions;

export default createTodoAreaSlice.reducer;
