import React from "react";
import "../../Styles/favorites.css";

export default function Favorites() {
  return (
    <div className="favorites">
      <h4 id="fav-txt">Favorites</h4>

      <div className="fav-box scrollableFav">
        <ul>Item order 1</ul>
        <ul>Item order 2</ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
        <ul className="FavEmpty-list"> </ul>
      </div>
    </div>
  );
}
