import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>My Server</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontsize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar__profileInfo">
          <h3>@Saurabh</h3>
          <p>#This is My ID</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
