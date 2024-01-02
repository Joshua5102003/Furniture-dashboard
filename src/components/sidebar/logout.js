import React from "react";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import "../../Styles/logout.css";

export default function Logout() {
  return (
    <div className="settingsFlex">
      <div className="settingItem">
        <IoSettings size={20} className="settingsIcon" />
        <h3>Settings</h3>
      </div>
      <div className="settingItem">
        <FiLogOut size={20} className="logoutIcon" />
        <h3>Logout</h3>
      </div>
    </div>
  );
}
