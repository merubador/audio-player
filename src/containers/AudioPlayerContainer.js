import { connect } from "react-redux";
import { getPlayer, getTimer } from "../selectors";
import AudioPlayer from "../components/AudioPlayer";

const mapStateToProps = state => ({
  player: getPlayer(state),
  timer: getTimer(state)
});

export default connect(mapStateToProps)(AudioPlayer);
