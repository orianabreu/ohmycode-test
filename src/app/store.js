import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from '../components/UsersSelect/usersSelectSlice';
import createTodoReducer from '../components/CreateTodoArea/CreateTodoAreaSlice';

const store = configureStore({
  reducer: {
    userIdSelect: userIdReducer,
    createTodo: createTodoReducer,
  },
});

export default store;
