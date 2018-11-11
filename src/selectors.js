import * as R from "ramda";

export const getTracks = R.prop("tracks");

export const getPlayer = R.prop("playerSettings");

export const getSearchTrack = R.prop("searchTrack");

export const getTimer = R.prop("timer");

const mapIndexed = R.addIndex(R.map);

export const getFilteredTracks = R.converge(
  (searchedTrack, tracks) =>
    R.pipe(
      R.filter(track => track.name.toLowerCase().includes(searchedTrack)),
      mapIndexed((item, index) => R.assoc("id", index, item))
    )(tracks),
  [getSearchTrack, getTracks]
);

export const getConvertedTime = R.converge(
  time =>
    R.pipe(
      R.prop("counter"),
      time =>
        `${Math.floor(time / 60)}:${
          time % 60 < 10 ? "0" + Math.floor(time % 60) : Math.floor(time % 60)
        }`
    )(time),
  [getTimer]
);
