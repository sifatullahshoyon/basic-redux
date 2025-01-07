import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  task: [
    {
      id: "sfstatfta",
      title: "Initialize Front-End",
      description:
        "Set up the project structure, install dependencies, and configure webpack",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "gesgfag",
      title: "create Redux Store",
      description:
        "Set up the project structure, install dependencies, and configure webpack",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.tasks.task;
};

export const selectFilter = (state: RootState) => {
  return state.tasks.filter;
};

export default taskSlice.reducer;
