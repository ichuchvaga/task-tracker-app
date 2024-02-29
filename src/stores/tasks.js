import { defineStore } from 'pinia';
import initData from './initData.json';

import { usePopupStore } from './popups.js';

function init(){
  const storageData = localStorage.getItem('tasks');
  let data = [];

  if (storageData) {
    data = JSON.parse(storageData);
  } else {
    data = initData;
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  return data;
}

export const useTasksStore = defineStore('tasks', {
  state: () => {
    return {
      tasks: init()
    }
  },
  getters: {
    getTaskByID: (state) => {
      return (id) => state.tasks.find(task => {
        return task.id == id;
      });
    },
  },
  actions: {
    saveToStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    
    create(data) {
      if (!data) {
        return false;
      }
      
      const new_id = new Date().getTime(); // get timestamp
      data.id = new_id;
      this.tasks.push(data);
    },
    remove(id) {
      if (!id) {
        return false;
      }

      const popupsStore = usePopupStore();

      let taskTitle = '';

      const newState = this.tasks.filter((task) => {
        if (task.id == id) {
          taskTitle = task.title;
          return false;
        }

        return true;
      });

      this.$patch((state) => {
        state.tasks = newState;
        state.hasChanged = true
      });

      popupsStore.status = false;
      
      this.saveToStorage();
    },
    update(data) {
      const newState = this.tasks.map((task) => {
        let newTask = task;

        if (task.id == data.id) {
          newTask.title = data.title;
          newTask.description = data.description;
          newTask.tag = data.tag;
        }

        return newTask;
      });

      this.$patch((state) => {
        state.tasks = newState;
        state.hasChanged = true
      });
      this.saveToStorage();
    }
  },
});