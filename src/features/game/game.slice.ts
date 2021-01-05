import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Vector2d } from "konva/types/types";
import { resetApp } from "../../store/global.actions";
import { initialState, IGameState } from "./initialState";
import { v4 as uuidv4 } from "uuid";

// Reducers
const updateZoomReducer: CaseReducer<IGameState, PayloadAction<Vector2d>> = (
  state,
  action
) => {
  state.stageZoom = action.payload;
  return state;
};

const updatePositionReducer: CaseReducer<
  IGameState,
  PayloadAction<Vector2d>
> = (state, action) => {
  state.stagePosition = action.payload;
  return state;
};

const addNewCounterReducer: CaseReducer<IGameState, PayloadAction<Vector2d>> = (
  state,
  action
) => {
  state.counters.push({
    id: uuidv4(),
    position: action.payload,
    value: 0,
  });
};

const updateCounterValueReducer: CaseReducer<
  IGameState,
  PayloadAction<{ id: string; delta: number }>
> = (state, action) => {
  const counter = state.counters.find((c) => c.id === action.payload.id);
  if (!!counter) {
    counter.value += action.payload.delta;
    if (counter.value < 0) {
      counter.value = 0;
    }
  }
};

const removeCounterReducer: CaseReducer<IGameState, PayloadAction<string>> = (
  state,
  action
) => {
  state.counters = state.counters.filter((c) => c.id !== action.payload);
};

const moveCounterReducer: CaseReducer<
  IGameState,
  PayloadAction<{ id: string; newPos: Vector2d }>
> = (state, action) => {
  const counter = state.counters.find((c) => c.id === action.payload.id);
  if (!!counter) {
    counter.position = {
      x: action.payload.newPos.x,
      y: action.payload.newPos.y,
    };
  }
};

// slice
const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    updateZoom: updateZoomReducer,
    updatePosition: updatePositionReducer,
    addNewCounter: addNewCounterReducer,
    updateCounterValue: updateCounterValueReducer,
    removeCounter: removeCounterReducer,
    moveCounter: moveCounterReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(resetApp, (state, action) => {
      state.stagePosition = { x: 0, y: 0 };
      state.stageZoom = { x: 1, y: 1 };
      state.counters = [];
    });
  },
});

export const {
  updateZoom,
  updatePosition,
  addNewCounter,
  updateCounterValue,
  removeCounter,
  moveCounter,
} = gameSlice.actions;

export default gameSlice.reducer;
