import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  date: Date;
  isCompleted: boolean;
}

export interface TaskState {
  tasks: Task[],
  nextId: number
}


const initialState: TaskState = {
  tasks: [], nextId: 0
};



const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const { name, date, isCompleted } = action.payload;
      const newTask: Task = {
        id: state.nextId,
        name,
        date,
        isCompleted,
      };
      state.tasks.push(newTask);
      state.nextId++;
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;