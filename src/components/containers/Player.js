import React from "react";
import { ThemeProvider } from "styled-components";
import Video from "../Video";
import Playlist from "./Playlist";
import StyledPlayer from "../styles/StyledPlayer";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};
const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
};

const Player = (props) => {
  const nightmodeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};
  return (
    <ThemeProvider theme={state.nightmode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video
            active={state.active}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.active}
            nightmodeCallback={nightmodeCallback}
            nightmode={state.nightmode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default Player;
