<script setup>
import { useTasksStore } from '@/stores/tasks';
const store = useTasksStore();

import { usePopupStore } from '@/stores/popups';
const storePopup = usePopupStore();

import { ref, onMounted } from 'vue';

import Task from './components/Task.vue';
import TaskForm from './components/TaskForm.vue';
import Modal from './components/Modal.vue';

const formStatus = ref(false);
const formEditState = ref(false);
const formEditData = ref(null);

function newTask(){
  formStatus.value = !formStatus.value;
  formEditState.value = false;
  formEditData.value = null;
}

function hideForm(){
  formStatus.value = false;
}

function editTask(data){
  formEditData.value = data;
  formEditState.value = true;
  formStatus.value = true;
}
</script>

<template>
<div class="page">
  <div class="container">
    
    <div class="task-list pt-md-5" v-show="!formStatus">
      <h2>Список задач</h2>

      <Task 
        v-for="item in store.tasks" 
        :data="item" 
        :key="item.id"
        @edit="editTask(item)" 
      />

    </div>

    <button 
      type="button" 
      class="btn btn-primary mt-2" 
      @click="newTask" 
      v-if="!formStatus">Новая задача</button>

    <TaskForm 
      v-if="formStatus" 
      @hideForm="hideForm"
      :isEdit="formEditState"
      :data="formEditData"
    />

  </div>
</div>

<Modal v-if="storePopup.status" :title="storePopup.title" />

</template>