import React, { useState } from "react";

const Textutil = (props) => {
  const [text, setText] = useState('');

  const handelinput = () => {
    console.log("Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);

    // Use for
    // setText("You Press The button");
  };
  const handeToLower = () => {
    // console.log("Button Clicked");
    let newText = text.toLowerCase();
    setText(newText);

    // Use for
    // setText("You Press The button");
  };

  const clearText = () =>{
    setText('')
  }

  const handelonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-2 shadow p-3 mb-5 bg-white rounded">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handelonchange}
          >
            
          </textarea>
        </div>

        <button className="btn btn-primary" onClick={handelinput}>
          Convert To Upper case
        </button>
        
        <button className="btn btn-primary mx-2" onClick={handeToLower}>
          Convert To Lower case
        </button>
        
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
      </div>

      <div className="shadow-lg p-3 mb-5 bg-white rounded">

        <p>
          Total {text.split(" ").length} words and {text.length} Sentence
        </p>
        <p>{0.008 *  text.split(" ").length} Minutes read</p>
      
      </div>

      <div className="container my-3 shadow p-3 mb-5 bg-white rounded">
        <h2>Preview Text</h2>
        <p>{text.length>0?text:'Enter Your Text Into Textbox .....'}</p>
      </div>
    </>
  );
};

export default Textutil;
