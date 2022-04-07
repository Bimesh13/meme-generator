import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header--content">
        <div className="logo--content">
          <img src="images/troll-face.png" className="logo--image" />
          <p className="logo--text">Meme Generator</p>
        </div>
        <p className="header--title">React Course - Project 3</p>
      </div>
    </header>
  );
}
