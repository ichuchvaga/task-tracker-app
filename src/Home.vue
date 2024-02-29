<script setup>
</script>

<template>
<div class="page">
  <div class="container">
    <div class="pt-md-5">

        <div class="px-4 py-5 my-5 text-center">
          <img class="d-block mx-auto mb-4" src="@/assets/images/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="display-5 fw-bold text-body-emphasis">Трекер задач</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Данный сервис предлагает уплавление Вашими задачами</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <router-link to="/vue/task-tracker/tasks" class="btn btn-primary btn-lg px-4 gap-3">Список задач</router-link>
            </div>
          </div>
        </div>


        <h2 class="pb-2 border-bottom">Возможности</h2>

        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 class="fs-2 text-body-emphasis">Удобный<br> в использовании</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 class="fs-2 text-body-emphasis">Большое количество опций для каждой задачи</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 class="fs-2 text-body-emphasis">Возможность создания требуемой структуры данных</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          </div>
        </div>


    </div>
  </div>
</div>
</template>