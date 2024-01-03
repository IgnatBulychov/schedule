<script setup lang="ts">
import type { Worker } from "@/types/types";

const { workers } = defineProps<{
  workers: Array<Worker>;
}>();

const route = useRoute();
</script>

<template>
  <div class="workers">
    <NuxtLink
      v-for="worker in workers"
      :to="{ name: 'index-id', params: { id: worker.id } }"
      class="link"
      :class="{ 'link--active': worker.id === Number(route.params.id) }"
    >
      {{ worker.name }}
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.workers {
  .link {
    margin-bottom: 12px;
  }
}
</style>
