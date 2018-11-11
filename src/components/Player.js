import React, { Component } from "react";
import styled from "styled-components";
import PlayerNavigationContainer from "../containers/PlayerNavigationContainer";
import AudioPlayerContainer from "../containers/AudioPlayerContainer";

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const Progress = styled.div`
  width: 500px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  cursor: pointer;
`;

const Volume = styled(Progress)`
  width: 160px;
`;

const VolumeFill = styled.div`
  height: 100%;
  background: #4286f4;
  width: ${({ volume }) => volume}%;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #4286f4;
  width: ${({ timestamp }) => timestamp}%;
`;

const CurrentTrack = styled.div`
  width: 100%;
  padding-top: 20px;
`;

class Player extends Component {
  componentDidUpdate(prevProps) {
    const { tracks, loadFirstTrack, player } = this.props;

    if (tracks.length > prevProps.tracks.length && !player.url) {
      loadFirstTrack(tracks[0]);
    }
  }

  changeVolume = e => {
    const { changeVolume } = this.props;
    const volume =
      (e.clientX - this.volume.offsetLeft) / this.volume.offsetWidth;
    changeVolume({ volume });
  };

  changeTimestamp = e => {
    const { changePlayerTime, player, startTimer } = this.props;

    if (player.url) {
      const time =
        ((e.clientX - this.progress.offsetLeft) / this.progress.offsetWidth) *
        player.duration;
      changePlayerTime(time);
      startTimer({ counter: time });
    }
  };

  setProgress = ref => {
    this.progress = ref;
  };

  setVolume = ref => {
    this.volume = ref;
  };

  render() {
    const {
      changeTimer,
      player: { name, band, volume, duration },
      timer: { counter },
      convertedTime
    } = this.props;

    return (
      <Panel>
        <AudioPlayerContainer />
        <PlayerNavigationContainer changeTimer={changeTimer} />
        <Progress ref={this.setProgress} onClick={this.changeTimestamp}>
          <ProgressFill timestamp={counter ? (counter / duration) * 100 : 0} />
        </Progress>
        <Volume ref={this.setVolume} onClick={this.changeVolume}>
          <VolumeFill volume={volume * 100} />
        </Volume>
        <CurrentTrack>
          <b>Current track: </b>
          {name} - {band} {convertedTime}
        </CurrentTrack>
      </Panel>
    );
  }
}

export default Player;
