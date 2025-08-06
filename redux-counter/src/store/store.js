import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feactures/counterSlice"

const store = configureStore({
    reducer:{
        counter : counterReducer,
    }
})

export default store;