<script setup>
useHead({
  title: "Worker",
});

const workersStore = useWorkersStore();
const route = useRoute();
</script>

<template>
  <div>
    <Calendar
      :workDays="
        workersStore.workers.find(
          (worker) => worker.id === Number(route.params.id)
        ).days
      "
      @select="(day) => workersStore.setHour(Number(route.params.id), day)"
    />
  </div>
</template>

<style lang="scss"></style>
