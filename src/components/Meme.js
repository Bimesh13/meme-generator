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

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="form">
      <form className="input--fields" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top Text Goes Here"
          className="form--inputTop"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom Text Goes Here"
          className="form--inputBottom"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          onClick={generateImage}
          type="submit"
          className="generate--button"
        >
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme--layout">
        <img src={meme.randomImage} className="meme--image" />
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
