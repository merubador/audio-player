import { connect } from "react-redux";
import { searchTrack } from "../actions";
import Search from "../components/Search";

const mapDispatchToProps = {
  searchTrack
};

export default connect(
  undefined,
  mapDispatchToProps
)(Search);
