import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
import {
  searchTrack as onSearchTrack,
  loadFirstTrack,
  playTrack,
  changeVolume,
  changePlayerTime,
  startTimer,
  getTrackSuccess
} from "./actions";

const tracks = handleAction(getTrackSuccess, (_, { payload }) => payload, []);

const playerSettings = handleActions(
  {
    [loadFirstTrack]: (_, { payload }) => ({
      ...payload,
      status: "pause",
      volume: 0.5
    }),
    [playTrack]: (_, { payload }) => ({ ...payload }),
    [changeVolume]: (state, { payload: { volume } }) => ({ ...state, volume }),
    [changePlayerTime]: (state, { payload: { time } }) => ({ ...state, time })
  },
  { volume: 0.5, time: 0 }
);

const searchTrack = handleAction(
  onSearchTrack,
  (_, { payload }) => payload,
  ""
);

const timer = handleAction(startTimer, (_, { payload }) => payload, {
  counter: 0
});

export default combineReducers({
  tracks,
  playerSettings,
  searchTrack,
  timer
});
