import { create } from "zustand";
interface TaskStore { tasks: any[]; loading: boolean; fetchTasks: () => void; }
export const useTaskStore = create<TaskStore>((set) => ({ tasks: [], loading: false, fetchTasks: () => set({ loading: true }) }));
