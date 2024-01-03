<script setup lang="ts"></script>

<template>
  <div class="footer">© {{ $dayjs().format("YYYY") }}</div>
</template>

<style lang="scss">
.footer {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -4px 1px 10px 0px rgba(34, 60, 80, 0.2);
  font-size: 12px;
}
</style>
