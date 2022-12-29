import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks: []
}


export const taskSlice = createSlice({
    name: 'taskManager',
    initialState,
    reducers:{
        getTasks:(state)=>{
            // Get code
        }
    }
})

export const { getTasks } = taskSlice.actions;
export default taskSlice.reducer;