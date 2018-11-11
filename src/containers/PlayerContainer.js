import { connect } from "react-redux";
import {
  getPlayer,
  getTimer,
  getFilteredTracks,
  getConvertedTime
} from "../selectors";
import Player from "../components/Player";
import {
  startTimer,
  changeVolume,
  changePlayerTime,
  playTrack,
  loadFirstTrack
} from "../actions";

const mapStateToProps = state => ({
  tracks: getFilteredTracks(state),
  player: getPlayer(state),
  timer: getTimer(state),
  convertedTime: getConvertedTime(state)
});

const mapDispatchToProps = {
  playTrack,
  startTimer,
  changeVolume,
  changePlayerTime,
  loadFirstTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
