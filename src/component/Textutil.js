import React, { useState } from 'react'

const Textutil = (props) => {
    const [text, setText] = useState();

    const handelinput= ()=>{
        console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText)

        // Use for 
        // setText("You Press The button");
    }

    const handelonchange= (event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id='mybox' rows='8' value={text} onChange={handelonchange}></textarea>
            </div>
            <button className ='btn btn-primary' onClick={handelinput}>Convert To Upper case</button>
        </>
    )
}

export default Textutil
