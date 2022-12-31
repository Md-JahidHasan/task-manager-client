import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/Authprovider';



const baseURI =`http://localhost:5000`
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder =>({

        getTasks: builder.query({
            // Get:http://localhost:5000/api/tasks
            query:(userEmail)=>`/api/tasks/${userEmail}`,
            providesTags:['tasks']
        }),


        getCompleteTasks: builder.query({
            query:(userEmail)=>`/api/completedTasks/${userEmail}`,
            providesTags:['completedtasks']
        }),


        addTask: builder.mutation({
            query:(initialTask)=>({
                url:'/api/tasks',
                method:'POST',
                body:initialTask
            }),
            invalidatesTags:['tasks']
        }),


        updateTaskComplete: builder.mutation({
            query:(taskId)=>({
                url:`/api/tasks`,
                method:'PATCH',
                body:taskId
            }),
            invalidatesTags:['tasks', 'completedtasks']
        }),


        updateTaskNotCompleted: builder.mutation({
            query:(taskId)=>({
                url:`/api/completedTasks`,
                method:'PATCH',
                body:taskId
            }),
            invalidatesTags:['completedtasks', 'tasks']
        }),


        editAndUpdateTask: builder.mutation({
            query:(newDataSet)=>({
                url:`/api/editTask`,
                method:'PATCH',
                body:newDataSet
            }),
            invalidatesTags: ['completedtasks', 'tasks']
        }),

        postComment: builder.mutation({
            query:(commentAndId)=>({
                url:`/api/postComment`,
                method:'PATCH',
                body:commentAndId
            }),
            invalidatesTags: ['completedtasks', 'tasks']
        }),


        deleteTask: builder.mutation({
            query:(taskId)=>({
                url:'/api/tasks',
                method:'DELETE',
                body:taskId
            }),
            invalidatesTags:['completedtasks', 'tasks']
        })
    })
})


export default apiSlice;