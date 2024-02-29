<script setup>
import { ref } from 'vue';
const mobileMenuStatus = ref(false);

function toggleMenu(){
  mobileMenuStatus.value = !mobileMenuStatus.value;
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link to="/vue/task-tracker/" class="navbar-brand">Трекер задач</router-link>

      <button class="navbar-toggler" type="button" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse" id="navbarText" :class="{'collapse': (!mobileMenuStatus)}">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/vue/task-tracker/" class="nav-link" active-class="active">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vue/task-tracker/tasks" class="nav-link" active-class="active">Список задач</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-brand {
  margin-right: 50px;
}
</style>