import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleOnChange = (event) => {
      console.log("On change");
      console.log(event.target.value);
      setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here');
    //text = "new text"; // wrong way to change to state
    //setText("next Text"); // Correct way to change to state
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}


