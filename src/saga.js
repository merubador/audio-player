import { delay } from "redux-saga";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { GET_TRACKS_REQUEST, getTrackSuccess } from "./actions";
import { fetchTracks } from "./managers";

function* getTracks() {
  const tracks = yield call(fetchTracks);
  yield delay(100);
  yield put(getTrackSuccess(tracks));
}

function* watchGetTracks() {
  yield takeEvery(GET_TRACKS_REQUEST, getTracks);
}

export default function* rootSaga() {
  yield all([watchGetTracks()]);
}
