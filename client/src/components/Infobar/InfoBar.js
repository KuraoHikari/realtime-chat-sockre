import React from 'react';
import './infoBar.css';
import onelilneIcon from './../../icons/onlineIcon.png';
import closeIcon from './../../icons/closeIcon.png';
const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onelilneIcon" src={onelilneIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
