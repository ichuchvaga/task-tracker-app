<script setup>
  const props = defineProps(['title']);
  import { useTasksStore } from '@/stores/tasks';
  const store = useTasksStore();

  import { usePopupStore } from '@/stores/popups';
  const storePopup = usePopupStore();

</script>

<template>

<div class="modal fade show" tabindex="-1" style="display: block;">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Удалить задачу?</h5>
        <button type="button" class="btn-close" aria-label="Close" @click.prevent="storePopup.hide()"></button>
      </div>
      <div class="modal-body">
        <p>{{ props.title }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click.prevent="storePopup.hide()">Отмена</button>
        <button type="button" class="btn btn-danger" @click.prevent="store.remove(storePopup.taskId)">Удалить</button>
      </div>
    </div>
  </div>
</div>

<div class="modal-backdrop fade show" @click.prevent="storePopup.hide()"></div>
</template>