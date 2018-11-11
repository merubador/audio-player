export const definePlayerState = (nextTrack, prevTrack) => {
  if (
    prevTrack.status === "playing" ||
    prevTrack.status === "modified" ||
    prevTrack.status === "continue"
  ) {
    if (nextTrack.url === prevTrack.url) {
      return {
        ...nextTrack,
        status: "pause",
        volume: prevTrack.volume
      };
    } else {
      return {
        ...nextTrack,
        status: "modified",
        volume: prevTrack.volume
      };
    }
  } else {
    if (nextTrack.url === prevTrack.url && prevTrack.url) {
      return {
        ...nextTrack,
        status: "continue",
        volume: prevTrack.volume
      };
    } else {
      return {
        ...nextTrack,
        status: "playing",
        volume: prevTrack.volume
      };
    }
  }
};

export const defineTrack = (player, tracks, value) => {
  const newIdTrack = player.id + value;
  let newTrack = {};
  if (player.url !== undefined) {
    if (newIdTrack >= tracks.length) {
      newTrack = tracks[0];
      return { ...newTrack, status: "modified", volume: player.volume };
    } else if (newIdTrack === -1) {
      newTrack = tracks[tracks.length - 1];

      return { ...newTrack, status: "modified", volume: player.volume };
    } else {
      newTrack = tracks[newIdTrack];

      return { ...newTrack, status: "modified", volume: player.volume };
    }
  } else {
    switch (value) {
      case 1:
        newTrack = tracks[0];

        return { ...newTrack, status: "playing", volume: player.volume };
      default:
        newTrack = tracks[tracks.length - 1];

        return { ...newTrack, status: "playing", volume: player.volume };
    }
  }
};

export const convertTime = time =>
  `${Math.floor(time / 60)}:${
    time % 60 < 10 ? "0" + Math.floor(time % 60) : Math.floor(time % 60)
  }`;
