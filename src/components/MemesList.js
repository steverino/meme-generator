import React from "react";
// import Meme from "./Meme";

const MemesList = (props) => {
  const [myInput, setMyInput] = React.useState({
    topText: "",
    bottomText: "",
  });

  // function handleChange(event) {
  //   setMyInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  const [imgText, setImgText] = React.useState({
    editTopText: props.topText
  }    
  )
  function textChange(event){
    setImgText((prevText) => {
      console.log(event.target.value);
      
      return {
        ...prevText,
        editTopText: event.target.value,
      }
    })
  }
  // let newText = props.topText
  const [newText, setNewText] = React.useState(
    props.topText
  )
  function saveEdit(){
    
    setNewText(imgText.editTopText)
  }

  return (
    <div>
      <div className="meme--image">
        <p className="top-text">{newText}</p>
        <img src={props.image} alt="random" />
        <p className="bottom-text">{props.bottomText}</p>
      </div>
      
      <form>
        <input type="text" name="editTopText" id="editTopText" onChange={textChange} />
        <input
          type="text"
          name="editBottomText"
          id=""
          
        />
        <button type="button" onClick={saveEdit}>Save edit</button>
      </form>
    </div>
  );
};

export default MemesList;
