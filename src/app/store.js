import { configureStore } from "@reduxjs/toolkit";
import userIdReducer from "../components/UsersSelect/usersSelectSlice";

const store = configureStore({
    reducer: {
        userIdSelect: userIdReducer,
    }
})

export default store;