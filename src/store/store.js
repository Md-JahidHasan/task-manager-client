import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { taskSlice } from "./reducer";

export const store = configureStore({
    reducer:{
        task: taskSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware=> getDefaultMiddleware().concat(apiSlice.middleware)
})