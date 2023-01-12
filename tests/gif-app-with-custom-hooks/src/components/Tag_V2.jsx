import React, { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const [gif, fetchGif] = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
