<script setup>
const emit = defineEmits(['hideForm']);
const props = defineProps(['data', 'isEdit']);
import { ref, onMounted } from 'vue';

import { useTasksStore } from '@/stores/tasks'
const store = useTasksStore();

const title = ref('');
const description = ref('');
const tag = ref('');

function createTask(){
  if (props.isEdit && props.isEdit === true) {
    saveTask();
    return false;
  }
  
  store.create({
    title: title.value,
    description: description,
    tag: tag.value
  });

  emit('hideForm');
}

function saveTask(){
  store.update({
    id: props.data.id,
    title: title.value,
    description: description,
    tag: tag.value
  });

  emit('hideForm');
}

onMounted(() => {
  if (props.data) {
    title.value = props.data.title;
    description.value = props.data.description;
    tag.value = props.data.tag;
  }
});
</script>

<template>
<form class="py-md-5" @submit.prevent="">

  <div class="h2">{{ isEdit ? 'Редактирование задачи' : 'Новая задача'}}</div>

  <div class="mb-3">
    <label for="input-title" class="form-label">Заголовок</label>
    <input type="text" class="form-control" id="input-title" v-model="title">
  </div>

  <div class="mb-3">
    <label for="input-descr" class="form-label">Описание</label>
    <input type="text" class="form-control" id="input-descr" v-model="description">
  </div>

  <div class="mb-3">
    <label for="input-tag" class="form-label">Метка (тип задачи)</label>
    <input type="text" class="form-control" id="input-tag" v-model="tag">
  </div>

  <div class="form__buttons mt-3">
    <button type="button" class="btn btn-primary" @click="createTask">{{ isEdit ? 'Сохранить' : 'Создать'}}</button>
    <button type="button" class="btn btn-secondary mx-3" @click="emit('hideForm')">Отменить</button>
  </div>
</form>
</template>