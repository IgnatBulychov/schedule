<script setup></script>

<template>
  <div class="layout">
    <AppHeader />
    <div class="content">
      <div class="container">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 0 64px;
}
.container {
  margin: 24px auto;
}
</style>
