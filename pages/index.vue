<script setup>
useHead({
  title: "Planner",
});

const workersStore = useWorkersStore();
const route = useRoute();
</script>

<template>
  <div class="workers-page">
    <div>
      <WorkersList :workers="workersStore.workers" />
    </div>
    <div>
      <div v-if="route.name === 'index'" class="helper">
        Please, select a worker
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
.workers-page {
  display: grid;
  grid-template-columns: 150px 1fr;
  .helper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
}
</style>
