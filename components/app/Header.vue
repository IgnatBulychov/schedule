<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="header">
    <div class="menu">
      <NuxtLink :to="{ name: 'index' }">
        <IconSchedule filled class="menu-icon" />
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'index' }"
        class="link"
        :class="{
          'link--active': route.name === 'index',
        }"
      >
        Workers
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'schedule' }"
        class="link"
        :class="{
          'link--active': route.name === 'schedule',
        }"
      >
        Schedule
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: -4px 1px 10px 0px rgba(34, 60, 80, 0.2);
  .menu {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 16px 32px;
    gap: 24px;
    &-icon {
      height: 24px;
      width: 24px;
      path {
        color: var(--blue);
      }
    }
  }
}
</style>
