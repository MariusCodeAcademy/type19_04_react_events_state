import { useState } from 'react';

export default function TextInput() {
  const [title, setTitle] = useState('Pradine reiksme');
  const [isTitleUpdated, setIsTitleUpdated] = useState(false);
  console.log('title ===', title);
  function updateTitle(event) {
    // console.log('event ===', event);
    const inputEl = event.target;
    // console.log('inputEl ===', inputEl);
    const ivesta = inputEl.value;
    console.log('updateTitle', ivesta);
    setTitle(ivesta);
    // setTitle(event.target.value);
  }

  function makeTitle() {
    setIsTitleUpdated(!isTitleUpdated);
    // if (isTitleUpdated === true) {
    //   setIsTitleUpdated(false);
    // } else {
    //   setIsTitleUpdated(true);
    // }
  }

  return (
    <div>
      <h2>{isTitleUpdated ? title : 'Main title'}</h2>
      {/* <h2>{title}</h2> */}
      <fieldset>
        <legend>Update</legend>
        <input
          value={title}
          onChange={updateTitle}
          type='text'
          placeholder='enter here'
        />
        {/* sukurti ir susieti su state */}
        <textarea cols='30' rows='10'></textarea>
        <button onClick={makeTitle}>Toggle title</button>
      </fieldset>

      <div>
        <h2>Title</h2>
        <p>text</p>
      </div>
    </div>
  );
}
