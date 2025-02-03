import { DayType } from "./consts";

export interface Day {
  type: DayType;
  number: number|null;
}

export interface ActionInfo {
  name: string,
  isCompleted: boolean,
}
