import React, { useState } from 'react'

export default function Content() {
  const [text, setText] = useState('');

  const handleClick = () => {
    // Your logic for handling the click event goes here
    setText(text.toUpperCase());
  };

  const handleClickLowerCase = () => {
    // Your logic for handling the click event goes here
    setText(text.toLowerCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container mt-4 text-center">
        <div>
          <textarea value={text} onChange={handleChange} cols="60" rows="5"></textarea>
        </div>
        <div>
          <button onClick={handleClick} className="btn btn-primary mt-2 mx-2" type="button">Upper Case</button>
          <button onClick={handleClickLowerCase} className="btn btn-primary mt-2 mx-2" type="button">Lower Case</button>
        </div>
      </div>

      <div className="container">
        <h2>Your Text summary</h2>
        <p>Your text have {text.split(" ").length} words and {text.length} characters</p>
      </div>
    </div>
  )
}
