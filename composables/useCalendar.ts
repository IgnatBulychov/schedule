import dayjs from "dayjs";
import type { Month } from "@/types/types";

const MAX_MONTHS_NUMBER = 6;

export function useCalendar() {
  const months = ref<Array<Month>>([]);

  months.value = Array.from(Array(MAX_MONTHS_NUMBER).keys()).map(
    (monthNumber) => {
      let startDay = dayjs().startOf("month").add(monthNumber, "months");

      return {
        days: Array.from(Array(startDay.daysInMonth()).keys()).map(
          (dayNumber) => startDay.add(dayNumber, "days")
        ),
      };
    }
  );

  const currentMonth = ref(0);

  function setCurrentMonth(month: number) {
    currentMonth.value = month;
  }

  return { months, currentMonth, setCurrentMonth };
}
