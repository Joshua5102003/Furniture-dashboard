import React from "react";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import "../src/App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
