import React, { Component } from "react";
import styled from "styled-components";
import { definePlayerState, defineTrack } from "../helper";
import { PLAYER_STATUS } from "../constants";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
`;

class PlayerNavigation extends Component {
  componentDidMount() {
    document.addEventListener("keydown", e => {
      const keyName = e.key;

      if (keyName === "ArrowUp") {
        this.playPrevTrack();
      } else if (keyName === "ArrowDown") {
        this.playNextTrack();
      }
    });
  }

  selectTrack = () => {
    const { player, changeTimer } = this.props;
    const playerState = definePlayerState(player, player);

    changeTimer(playerState);
  };

  playPrevTrack = () => {
    const { player, tracks, changeTimer } = this.props;
    const playerState = defineTrack(player, tracks, -1);

    changeTimer(playerState);
  };

  playNextTrack = () => {
    const { player, tracks, changeTimer } = this.props;
    const playerState = defineTrack(player, tracks, 1);

    changeTimer(playerState);
  };

  render() {
    const { player } = this.props;

    return (
      <Navigation>
        <div onClick={this.playPrevTrack}>Prev</div>
        {player.status === PLAYER_STATUS.PAUSE ? (
          <div onClick={this.selectTrack}>Play</div>
        ) : (
          <div onClick={this.selectTrack}>Pause</div>
        )}
        <div onClick={this.playNextTrack}>Next</div>
      </Navigation>
    );
  }
}

export default PlayerNavigation;
