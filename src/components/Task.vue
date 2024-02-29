<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['edit']);

import { usePopupStore } from '@/stores/popups';
const storePopup = usePopupStore();

function remove() {
  storePopup.show({
    taskId: props.data.id
  });
}

function edit() {
  emit('edit');
}
</script>

<template>
<div class="card my-4">
  <div class="card-body">
    <div class="card-title h5 mb-3">{{ data.title }}</div>
    <div class="card-subtitle h6 mb-2 text-body-secondary">{{ data.tag }}</div>
    <p class="card-text">{{ data.description }}</p>
    
    <a href="#" class="card-link" @click.prevent="edit">Редактировать</a>
    <a href="#" class="card-link" @click.prevent="remove">Удалить</a>
  </div>
</div>
</template>