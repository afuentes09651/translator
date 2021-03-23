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

  return(
    <>
    <p>Enter Input here</p>
    <p>{output}</p>
    <button onClick={() => execTrans()}>Click Me</button>
    </>
  );
}

export default Input;
