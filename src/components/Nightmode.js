import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const Nightmode = ({ nightmode, nightmodeCallback }) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label htmlFor="" className="switch">
      <input type="checkbox" checked={nightmode} onCHange={nightmodeCallback} />
      <span className="slider round"></span>
    </label>
  </StyledNightmode>
);
export default Nightmode;
