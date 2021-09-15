import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vector2d } from "konva/lib/types";
import { GameType, PlayerColor } from "../../constants/app-constants";
import { receiveRemoteGameState, resetApp } from "../../store/global.actions";
import { IGameState, initialState } from "./initialState";

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

const connectToRemoteGameReducer: CaseReducer<
  IGameState,
  PayloadAction<string>
> = () => {};

const setPlayerColorReducer: CaseReducer<
  IGameState,
  PayloadAction<{ ref: string; color: PlayerColor }>
> = (state, action) => {
  state.playerColors[action.payload.ref] = action.payload.color;
};

const setPeerIdReducer: CaseReducer<IGameState, PayloadAction<string>> = (
  state,
  action
) => {
  state.peerId = action.payload;
};

const setPreviewCardIdReducer: CaseReducer<
  IGameState,
  PayloadAction<string>
> = (state, action) => {
  if (!state.previewCard) {
    state.previewCard = { id: action.payload };
  } else if (state.previewCard.id !== action.payload) {
    state.previewCard.id = action.payload;
  }
};

const clearPreviewCardReducer: CaseReducer<IGameState> = (state) => {
  state.previewCard = null;
};

const setMenuPreviewCardJsonIdReducer: CaseReducer<
  IGameState,
  PayloadAction<string>
> = (state, action) => {
  state.menuPreviewCardJsonId = action.payload;
};

const clearMenuPreviewCardJsonIdReducer: CaseReducer<IGameState> = (state) => {
  state.menuPreviewCardJsonId = null;
};

const requestResyncReducer: CaseReducer<IGameState> = () => {};

const updateActiveGameTypeReducer: CaseReducer<
  IGameState,
  PayloadAction<GameType>
> = (state, action) => {
  state.activeGameType = action.payload;
};

const quitGameReducer: CaseReducer<IGameState> = (state) => {
  state.activeGameType = null;
};

const showRadialMenuAtPositionReducer: CaseReducer<
  IGameState,
  PayloadAction<Vector2d>
> = (state, action) => {
  state.radialMenuPosition = action.payload;
};

const hideRadialMenuReducer: CaseReducer<IGameState> = (state) => {
  state.radialMenuPosition = null;
};

const showSpecificCardLoaderReducer: CaseReducer<
  IGameState,
  PayloadAction<Vector2d>
> = (state, action) => {
  state.specificCardLoaderPosition = action.payload;
};

const hideSpecificCardLoaderReducer: CaseReducer<IGameState> = (state) => {
  state.specificCardLoaderPosition = null;
};

// slice
const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    updateZoom: updateZoomReducer,
    updatePosition: updatePositionReducer,
    connectToRemoteGame: connectToRemoteGameReducer,
    setPlayerColor: setPlayerColorReducer,
    setPeerId: setPeerIdReducer,
    requestResync: requestResyncReducer,
    setPreviewCardId: setPreviewCardIdReducer,
    clearPreviewCard: clearPreviewCardReducer,
    setMenuPreviewCardJsonId: setMenuPreviewCardJsonIdReducer,
    clearMenuPreviewCardJsonId: clearMenuPreviewCardJsonIdReducer,
    updateActiveGameType: updateActiveGameTypeReducer,
    quitGame: quitGameReducer,
    showRadialMenuAtPosition: showRadialMenuAtPositionReducer,
    hideRadialMenu: hideRadialMenuReducer,
    showSpecificCardLoader: showSpecificCardLoaderReducer,
    hideSpecificCardLoader: hideSpecificCardLoaderReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(receiveRemoteGameState, (state, action) => {
      state.activeGameType = action.payload.game.activeGameType;
    });
    builder.addCase(resetApp, (state, action) => {
      state.stagePosition = { x: 0, y: 0 };
      state.stageZoom = { x: 0.5, y: 0.5 };
      state.previewCard = null;
    });
  },
});

export const {
  updateZoom,
  updatePosition,
  connectToRemoteGame,
  setPlayerColor,
  setPeerId,
  requestResync,
  setPreviewCardId,
  clearPreviewCard,
  setMenuPreviewCardJsonId,
  clearMenuPreviewCardJsonId,
  updateActiveGameType,
  quitGame,
  showRadialMenuAtPosition,
  hideRadialMenu,
  showSpecificCardLoader,
  hideSpecificCardLoader,
} = gameSlice.actions;

export default gameSlice.reducer;
