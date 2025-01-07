import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "c9X0bLtbRDUJAlDAZLVCZ",
      isCompleted: false,
      description: "lorem ipsum dolor sit amet",
      title: "learn web development",
      priority: "low",
      dueDate: "2025-01-14T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type TDrafTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: TDrafTask): ITask => {
  const nanoId = nanoid();
  console.log(nanoId);
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TDrafTask>) => {
      //   const id = uuidv4();
      //   const taskData = {
      //     ...action.payload,
      //     id,
      //     isCompleted: false,
      //   };
      //   state.task.push(taskData);
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.tasks.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.tasks.filter;
};

export const { addTask, toggleCompletedState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
