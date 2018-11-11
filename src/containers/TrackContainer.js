import { connect } from "react-redux";
import Track from "../components/Track";
import { getPlayer, getTimer } from "../selectors";

const mapStateToProps = state => ({
  player: getPlayer(state),
  timer: getTimer(state)
});

export default connect(mapStateToProps)(Track);
