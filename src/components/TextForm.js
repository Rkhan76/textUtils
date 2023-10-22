import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked')
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = () => {
    console.log('Lowercase was clicked')
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleClearClick = () => {
    console.log('Clear the Text')
    let newText = ''
    setText(newText)
  }
  const handleCopy =()=>{
    navigator.clipboard.writeText(text)
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // const newText = text.replace(/\s+/g, ' ').trim();
    // console.log(newText)
    // setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log('On change')
    // console.log(event.target.value)
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here')
  //text = "new text"; // wrong way to change to state
  //setText("next Text"); // Correct way to change to state
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          ExtraSpaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
