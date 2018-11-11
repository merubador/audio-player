import { connect } from "react-redux";
import { getPlayer, getFilteredTracks, getTimer } from "../selectors";
import PlayerNavigation from "../components/PlayerNavigation";

const mapStateToProps = state => ({
  player: getPlayer(state),
  tracks: getFilteredTracks(state),
  timer: getTimer(state)
});

export default connect(mapStateToProps)(PlayerNavigation);
