import React from "react";
import Meme from "./Meme";

const MemesList = ({ topText, bottomText, image }) => {
  const [imageData, setImageData] = React.useState({
    id: "",
    topText: "",
    bottomText: "",
    image: "",
  });

  

  return (
    <div>
       <div className="meme--image">
        <p className="top-text">{topText}</p>
        <img src={image} alt="random" />
        <p className="bottom-text">{bottomText}</p>
      </div>

       
    </div>
  );
};

export default MemesList;
