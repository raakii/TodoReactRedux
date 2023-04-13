import { rootApi } from "..";
import { task } from "./type";

export const TaskApi = rootApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllTasks: builder.query<task[],void>({
            query: () => `/tasks`,
            providesTags: [{ type: "TASKS", id: "LIST" }]
        }),

        getTaskById: builder.query<task,string>({
            query: (id: string) => `/tasks/${id}`,
            providesTags: (_result, _error, id) => [{ type: "TASKS", id: "LIST"  }],
        }),

        saveTask: builder.mutation<task,task>({
            query: (body: task) => ({
                url: `tasks`,
                method: "POST",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "TASKS", id: "LIST" }],
        }),

        updateTask: builder.mutation<task,task>({
            query: (body: task) => ({
                url: `tasks/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "TASKS", id: "LIST"  }],
        }),

        deleteTask: builder.mutation<void,string>({
            query: (id: string) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "TASKS", id: "LIST" }],
        })
        
    }),
    overrideExisting: false,
});


export const {
    useGetAllTasksQuery,
    useGetTaskByIdQuery,
    useSaveTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
  } = TaskApi;