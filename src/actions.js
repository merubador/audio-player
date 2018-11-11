import { createAction } from "redux-actions";

export const GET_TRACKS_REQUEST = "GET_TRACKS_REQUEST";

export const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";

export const getTracksRequets = createAction(GET_TRACKS_REQUEST);

export const getTrackSuccess = createAction(GET_TRACKS_SUCCESS);

export const loadFirstTrack = createAction("LOAD_FIRST_TRACK");

export const playTrack = createAction("PLAY_TRACK");

export const searchTrack = createAction("SEARCH_TRACK");

export const startTimer = createAction("START_TIMER");

export const changeVolume = createAction("CHANGE_VOLUME");

export const changePlayerTime = createAction("CHANGE_PLAYER_TIME");
