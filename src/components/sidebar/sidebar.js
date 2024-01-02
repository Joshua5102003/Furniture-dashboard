import React from "react";
import "../../Styles/sidebar.css";

import Logo from "./logo";
import Favorites from "./favorites";
import Download from "./download";
import Logout from "./logout";

export default function Sidebar() {
  return (
    <div className="block">
      <div className="flexSidebar">
        <Logo />

        <Favorites />

        <Download />

        <Logout />
      </div>
    </div>
  );
}
