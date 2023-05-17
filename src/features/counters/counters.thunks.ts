import { Vector2d } from "konva/lib/types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store/rootReducer";
import { addNewCounterWithId } from "./counters.actions";

export const addNewCounter =
  (
    pos: Vector2d,
    imgUrl?: string
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    const payloadWithId = {
      pos,
      imgUrl,
      id: uuidv4(),
    };
    dispatch(addNewCounterWithId(payloadWithId));
  };
