import { Dayjs } from "dayjs";

export type Month = {
  days: Array<Dayjs>;
};

export interface Worker {
  id: number;
  name: string;
  days: Array<String>;
}
