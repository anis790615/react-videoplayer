import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "./PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightmodeCallback, nightmode }) => (
  <StyledPlaylist>
    <Nightmode nightmodeCallback={nightmodeCallback} nightmode={nightmode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);
export default Playlist;
