import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/Authprovider';



const baseURI =`http://localhost:5000`
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder =>({

        getTasks: builder.query({
            // Get:http://localhost:5000/api/tasks
            query:(userEmail)=>`/api/tasks/${userEmail}`
        }),


        getCompleteTasks: builder.query({
            query:(userEmail)=>`/api/completedTasks/${userEmail}`
        }),


        addTask: builder.mutation({
            query:(initialTask)=>({
                url:'/api/tasks',
                method:'POST',
                body:initialTask
            })
        }),

        updateTaskComplete: builder.mutation({
            query:(taskId)=>({
                url:`/api/tasks`,
                method:'PATCH',
                body:taskId
            })
        }),

        updateTaskNotCompleted: builder.mutation({
            query:(taskId)=>({
                url:`/api/completedTasks`,
                method:'PATCH',
                body:taskId
            }),
        }),


        deleteTask: builder.mutation({
            query:(taskId)=>({
                url:'/api/tasks',
                method:'DELETE',
                body:taskId
            }),
        })
    })
})


export default apiSlice;