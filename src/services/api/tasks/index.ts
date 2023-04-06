import { rootApi } from "..";
import { Task } from "./type";

export const TaskApi = rootApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllTasks: builder.query<Task[],void>({
            query: () => `/tasks`,
        }),

        getTaskById: builder.query<Task,number>({
            query: (id: number) => `/tasks/${id}`,
        }),

        saveTask: builder.mutation<Task,Task>({
            query: (body: Task) => ({
                url: `tasks`,
                method: "POST",
                body
            })
        }),

        updateTask: builder.mutation<Task,Task>({
            query: (body: Task) => ({
                url: `tasks/${body.id}`,
                method: "PUT",
                body
            })
        }),

        deleteTask: builder.mutation<void,number>({
            query: (id: number) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            })
        })
        
    })
})


export const {
    useGetAllTasksQuery,
    useGetTaskByIdQuery,
    useSaveTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
  } = TaskApi;