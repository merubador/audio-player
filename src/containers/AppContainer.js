import { connect } from "react-redux";
import { getPlayer, getTimer } from "../selectors";
import { getTracksRequets, playTrack, startTimer } from "../actions";
import App from "../App";

const mapStateToProps = state => ({
  player: getPlayer(state),
  timer: getTimer(state)
});

const mapDispatchToProps = {
  getTracksRequets,
  playTrack,
  startTimer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
