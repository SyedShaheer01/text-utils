import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './style.css'


function TextControlsExample(props) {
  let handleUp=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert(" Converted to upper case" , "success")

  }
  let handleDown=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert(" Converted to lower case" , "success")


  }
  let handlOn=(event)=>{
    setText(event.target.value)
  }
  let handleClear=()=>{
    let newText=""
    setText(newText)
    props.showAlert(" Clear all text", "success")

  }
  let handleSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces" , "success")

  }
  let handleCopy=()=>{
    var text= document.getElementById("box")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard" , "success")

  }

  const [text,setText]=useState('')
  return (
      <div>

    <Form>
      <div className='container my-5'>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
        <Form.Label></Form.Label>
        <h1 style={{color: props.mode==="dark"?"white":"dark"}}>{props.heading}</h1>
        <Form.Control as="textarea" rows={8} value={text} onChange={handlOn} style={{backgroundColor:props.mode==="dark"? "#90a6c7":"white", color:props.mode==="dark"?"white":"black"}} id="box"/>
      </Form.Group>
      </div>
        
      
    </Form>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>

      <Button variant="primary" onClick={handleUp}>To Upper Case</Button>{' '}
      <Button variant="primary mx-1" onClick={handleDown}>To Lower Case</Button>{' '}
      <Button variant="primary mx-1" onClick={handleCopy}>Copy text</Button>{' '}
      <Button variant="primary mx-1" onClick={handleClear}>Clear text</Button>{' '}
      <Button variant="primary mx-1" onClick={handleSpace}>Clear spaces</Button>{' '}
    <h1 className='my-4'>Your Text Summary :-</h1>
    <span>{!text ? 0 :  text.split(" ").length} Words , {text.length} characters</span>
    <h1 className='my-4'>Preview:-</h1>
    <span className='preview'>{text.length > 0 ? text :"Enter the text above to preview."}</span>
    
    </div>
   

    </div>
    
    

  );
}

export default TextControlsExample;