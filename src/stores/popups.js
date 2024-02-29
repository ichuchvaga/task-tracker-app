import { defineStore } from 'pinia';

import { useTasksStore } from './tasks.js';

export const usePopupStore = defineStore('popup', {
  state: () => {
    return {
      status: false,
      title: '',
      taskId: null
    }
  },
  getters: {
  },
  actions: {
    show(data) {
      const tasksStore = useTasksStore();

      if (!data) {
        return false;
      }

      const selectedTask = tasksStore.getTaskByID(data.taskId);
      if (selectedTask) {
        this.title = selectedTask.title;
      }      
      this.status = true;
      this.taskId = data.taskId;
    },
    hide() {
      this.status = false;
    }
  },
})
