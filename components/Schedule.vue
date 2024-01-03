<script setup lang="ts">
import type { Worker } from "@/types/types";

const { workers } = defineProps<{
  workers: Array<Worker>;
}>();

const { months, currentMonth, setCurrentMonth } = useCalendar();

const emits = defineEmits(["select"]);
</script>

<template>
  <div class="schedule">
    <div class="schedule-months">
      <div
        v-for="(month, key) in months"
        @click="setCurrentMonth(key)"
        class="link"
        :class="{
          'link--active': currentMonth === key,
        }"
      >
        {{ month.days.at(0)?.format("MMMM YYYY") }}
      </div>
    </div>
    <div class="schedule-days">
      <div class="schedule-name">Name</div>
      <div
        v-for="day in months[currentMonth].days"
        class="schedule-day"
        :class="{
          'schedule-day--empty': !workers.some((worker) =>
            worker.days.some((date) => day.isSame(date))
          ),
        }"
      >
        {{ day.format("DD") }}
      </div>
    </div>
    <div v-for="worker in workers" class="schedule-days">
      <div class="schedule-name">
        {{ worker.name }}
      </div>
      <div v-for="day in months[currentMonth].days" class="schedule-day">
        <div
          class="schedule-line"
          :class="{
            'schedule-line--show': worker.days.some((date) => day.isSame(date)),
            'schedule-line--r-left': !worker.days.some((date) =>
              day.subtract(1, 'day').isSame(date)
            ),
            'schedule-line--r-right': !worker.days.some((date) =>
              day.add(1, 'day').isSame(date)
            ),
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.schedule {
  &-months {
    display: flex;
    margin-bottom: 24px;
    .link {
      margin-right: 32px;
    }
  }
  &-name {
    display: flex;
    align-items: center;
    width: 120px;
  }
  &-days {
    display: flex;
    border-top: 1px solid #e6e6ff;
    &:last-of-type {
      border-bottom: 1px solid #e6e6ff;
    }
  }
  &-day {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
    &--empty {
      color: var(--red);
    }
  }
  &-line {
    height: 10px;
    width: 100%;
    background: var(--green);
    display: none;
    &--show {
      display: block;
    }
    &--r-left {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    &--r-right {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
}
</style>
