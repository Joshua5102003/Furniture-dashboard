import React from "react";
import "../../Styles/header.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import ComboBox from "./ComboBox";

export default function Header() {
  return (
    <div className="header">
      <div className="searches flexHeader">
        <ComboBox title={"Products"} />
        <ComboBox title={"Applications"} />
        <ComboBox title={"Specification"} />
        <FaRegCircleUser className="flex-u" />

        <div class="flexC">
          <IoIosNotifications className="flex-i" />
          <BiSolidMessage className="flex-i" />
        </div>
      </div>
    </div>
  );
}
