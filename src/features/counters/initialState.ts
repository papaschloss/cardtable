import { Vector2d } from "konva/types/types";
import { loadState } from "../../store/localStorage";

export interface ICountersState {
  counters: ICounter[];
  firstPlayerCounterPosition: Vector2d;
}

export interface ICounter {
  id: string;
  position: Vector2d;
  value: number;
}

const localStorageState: ICountersState =
  loadState("liveState")?.counters ?? {};

const defaultState: ICountersState = {
  counters: [],
  firstPlayerCounterPosition: { x: 0, y: 0 },
};
export const initialState: ICountersState = {
  ...defaultState,
  ...localStorageState,
};
