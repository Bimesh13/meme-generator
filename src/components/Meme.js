import React from "react";
import memesData from "../data.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function generateImage() {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randomIndex].url,
    }));
  }
  return (
    <div className="form">
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
      <button onClick={generateImage} className="generate--button">
        Get a new meme image 🖼
      </button>
      <img src={meme.randomImage} className="meme--image" />
    </div>
  );
}
