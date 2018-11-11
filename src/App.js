import React, { Component } from "react";
import styled from "styled-components";
import TrackListContainer from "./containers/TrackListContainer";
import PlayerContainer from "./containers/PlayerContainer";
import SearchContainer from "./containers/SearchContainer";
import { PLAYER_STATUS } from "./constants";
import { GlobalStyle } from "./theme";

const Container = styled.div`
  max-width: 900px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
`;

class App extends Component {
  componentDidMount() {
    this.props.getTracksRequets();
  }

  changeTimer = playerState => {
    const {
      timer: { counter },
      playTrack
    } = this.props;

    switch (playerState.status) {
      case PLAYER_STATUS.MODIFIED:
        clearInterval(this.counter);
        this.startTimer();
        break;
      case PLAYER_STATUS.PLAYING:
        this.startTimer();
        break;
      case PLAYER_STATUS.PAUSE:
        clearInterval(this.counter);
        break;
      case PLAYER_STATUS.CONTINUE:
        this.startTimer(counter);
        break;
      default:
        break;
    }
    playTrack(playerState);
  };

  startTimer = counter => {
    const { startTimer } = this.props;
    this.counter = setInterval(this.tick, 1000);
    startTimer({ counter: counter || 0 });
  };

  tick = () => {
    const { timer, startTimer, player } = this.props;
    if (timer.counter >= player.duration) {
      clearInterval(this.counter);
    } else {
      startTimer({ counter: timer.counter + 1 });
    }
  };

  render() {
    return (
      <Container>
        <h1>Music player</h1>
        <PlayerContainer changeTimer={this.changeTimer} />
        <SearchContainer />
        <TrackListContainer changeTimer={this.changeTimer} />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
