import React from "react";
import Header from "./header";
import Recent from "./recent";
import Allproduct from "./allproduct";
import "../../Styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <h2 className="homeHeadings">
        Recently Accessed
        <hr />
      </h2>

      <Recent />

      <h2 className="homeHeadings">
        All Products
        <hr />
      </h2>

      <Allproduct />
    </div>
  );
}
