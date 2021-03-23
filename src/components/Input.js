import React, {useState} from 'react';
import translate from 'translate';

translate.engine = 'libre'; //this allows for us to not need an API key

function Input(){

  //some states for our I/O
  const [input, setInput] = useState(''); //initialized to test for testing purposes
  const [output,setOutput] = useState('')

  //This function executes the translation
  async function execTrans(){
    setOutput('loading translation...'); //Notifying the user that the translation is loading if it takes a while...
    const spanish = await translate('hello world', 'es'); //test call
    setOutput(spanish); //set the output
  }

  //this function handles the change within the user input to update state accordingly
  function handleChange(e){
    setInput(e.target.value); //set the input to the user input that is present in the text box
    console.log('input has changed: ', input); //debugging log
  }

  return(
    <>
    <label htmlFor='input'>Enter Input: </label>
    <textarea
        rows='4'
        columns='50'
        maxLength='300'
        placeholder='Enter English Here'
        id='userInput'
        value={input}
        onChange={handleChange}>
    </textarea>
    <p>{output}</p>
    <button onClick={() => execTrans()}>Click Me</button>
    </>
  );
}

export default Input;
