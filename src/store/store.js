import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./reducer";

export const store = configureStore({
    reducer:{
        task: taskSlice
    }
})