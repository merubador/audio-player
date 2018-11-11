import React, { Component } from "react";
import styled from "styled-components";
import TrackContainer from "../containers/TrackContainer";

const List = styled.div`
  padding-top: 50px;
`;

class TrackList extends Component {
  render() {
    const { tracks, changeTimer } = this.props;
    return (
      <List>
        {tracks.map((item, index) => (
          <TrackContainer track={item} key={index} changeTimer={changeTimer} />
        ))}
      </List>
    );
  }
}

export default TrackList;
