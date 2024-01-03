import { defineStore } from "pinia";
import type { Worker } from "@/types/types";
import initWorkers from "@/consts/test-data";
import { Dayjs } from "dayjs";

export const useWorkersStore = defineStore("workers", () => {
  const workers = ref<Array<Worker>>(initWorkers);

  function addWorker(name: string): void {
    workers.value.push({
      id: Math.floor(Math.random() * 10000000),
      name,
      days: [],
    });
  }

  function setHour(workerId: number, day: Dayjs): void {
    let id = workers.value.findIndex((worker) => worker.id === workerId);
    if (
      id !== null &&
      !workers.value[id].days.some((date) => day.isSame(date))
    ) {
      workers.value[id].days.push(day.format());
    } else if (id !== null) {
      workers.value[id].days = workers.value[id].days.filter(
        (date) => !day.isSame(date)
      );
    }
  }

  return { workers, addWorker, setHour };
});
