import React from "react";

export default function Meme() {
  return (
    <form>
      <div className="input--fields">
        <input
          type="text"
          placeholder="Top Text Goes Here"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom Text Goes Here"
          className="form--input"
        />
      </div>
      <button className="generate--button">Get a new meme image 🖼</button>
    </form>
  );
}
