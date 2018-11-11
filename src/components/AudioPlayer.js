import React, { Component } from "react";
import { PLAYER_STATUS } from "../constants";
import styled from "styled-components";

const Audio = styled.audio`
  display: none;
`;

class AudioPlayer extends Component {
  componentDidUpdate(prevProps) {
    const { player, timer } = this.props;
    if (prevProps.player !== player) {
      if (player.status === PLAYER_STATUS.PAUSE) {
        this.audio.pause();
      } else {
        this.audio.play();
        this.audio.volume = player.volume;
        this.audio.currentTime = timer.counter;
      }
    }
  }

  setAuido = ref => {
    this.audio = ref;
  };

  render() {
    const {
      player: { url }
    } = this.props;

    return <Audio ref={this.setAuido} src={url} />;
  }
}

export default AudioPlayer;
