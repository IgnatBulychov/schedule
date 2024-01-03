<script setup>
useHead({
  title: "Schedule",
});

const workersStore = useWorkersStore();
</script>

<template>
  <div class="schedule-page">
    <Schedule :workers="workersStore.workers" />
  </div>
</template>

<style lang="scss">
.schedule-page {
}
</style>
