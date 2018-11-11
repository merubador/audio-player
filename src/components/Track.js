import React, { Component } from "react";
import styled from "styled-components";
import { definePlayerState, convertTime } from "../helper";

const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding: 7px 9px;
  background-color: ${({ color }) => color};
`;

class Track extends Component {
  selectTrack = () => {
    const { track, player, changeTimer } = this.props;
    const playerState = definePlayerState(track, player);

    changeTimer(playerState);
  };

  render() {
    const {
      track: { name, band, duration, url },
      player
    } = this.props;

    const convertedDuration = convertTime(duration);

    return (
      <Item
        onClick={this.selectTrack}
        color={url === player.url ? "#fafafa" : "#fff"}
      >
        <div>
          {name} - {band}
        </div>
        <div>{convertedDuration}</div>
      </Item>
    );
  }
}

export default Track;
