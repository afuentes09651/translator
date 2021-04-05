import React, {useState} from 'react';
import translate from 'translate';

translate.engine = 'libre'; //this allows for us to not need an API key

function Input(){

  //some states for our I/O
  const [input, setInput] = useState(''); //initialized to test for testing purposes
  const [output,setOutput] = useState('');

  //This function executes the translation
  async function execTrans(e){
    e.preventDefault();

    //get the language information...
    const langTo = e.target.langTo.value;
    const langFrom = e.target.langFrom.value;


    //prepare and execute translation...
    setOutput('loading translation...'); //Notifying the user that the translation is loading if it takes a while...
    const spanish = await translate(input, {to: langTo, from: langFrom}); //test call
    setOutput(spanish); //set the output
  }

  //this function handles the change within the user input to update state accordingly
  function handleChange(e){
    setInput(e.target.value); //set the input to the user input that is present in the text box
    console.log('input has changed: ', input); //debugging log
  }

  return(
    <>
    <form
      onSubmit={execTrans}>
      <div class='wrapper'>

      <fieldset>
        <label
          htmlFor='langFrom'
          >Select origin language: </label>
        <select
          id='langFrom'
          class='form-control'>
          <option value='en' defaultValue>English</option>
          <option value='es'>Spanish</option>
          <option value='fr'>French</option>
          <option value='de'>German</option>
          <option value='ja'>Japanese</option>
        </select>

        <label htmlFor='input'>Enter Input: </label>
        <textarea
            rows='4'
            columns='50'
            maxLength='300'
            placeholder='Enter Text Here'
            id='userInput'
            value={input}
            onChange={handleChange}
            class='form-control input'
            >
        </textarea>
      </fieldset>

      <fieldset>
          <label htmlFor='langTo'>Select output language: </label>
          <select id='langTo' class='form-control'>
            <option value='es' defaultValue>Spanish</option>
            <option value='en' >English</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='ja'>Japanese</option>
          </select>

          <br />

        <p>{output}</p>
    </fieldset>
  </div>
      <input type='submit' value='Submit'/>
    </form>


    </>
  );
}

export default Input;
