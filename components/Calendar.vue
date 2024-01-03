<script setup lang="ts">
import type { Dayjs } from "dayjs";

const { workDays } = defineProps<{
  workDays: Array<Dayjs>;
}>();

const { months } = useCalendar();

const emits = defineEmits(["select"]);
</script>

<template>
  <div class="calendar">
    <div v-for="month in months" class="calendar-month">
      <div class="calendar-month-name">
        {{ month.days.at(0)?.format("MMMM YYYY") }}
      </div>
      <div
        v-for="day in month.days"
        @click="emits('select', day)"
        class="calendar-day"
        :class="{
          'calendar-day--selected': workDays.some((date) =>
            day.isSame(date, 'day')
          ),
        }"
        :style="`grid-column-start: ${day.isoWeekday()}`"
      >
        {{ day.format("D") }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;

  &-month {
    display: grid;
    grid-template-columns: repeat(7, 48px);
    width: fit-content;

    &-name {
      grid-column-start: 1;
      grid-column-end: 8;
      margin-bottom: 12px;
      text-align: center;
    }
  }
  &-day {
    width: 48px;
    height: 48px;
    padding: 4px;
    border-left: 1px solid var(--main-bg);
    border-top: 1px solid var(--main-bg);
    color: var(--gray);
    background: #d4e1ff;
    cursor: pointer;
    transition: background 0.2s ease;
    &--selected {
      background: #9fffaf;
    }
    &:hover {
      background: #9fffaf;
    }
  }
}
</style>
