import { connect } from "react-redux";
import TrackList from "../components/TrackList";
import { getFilteredTracks } from "../selectors";

const mapStateToProps = state => ({
  tracks: getFilteredTracks(state)
});

export default connect(mapStateToProps)(TrackList);
