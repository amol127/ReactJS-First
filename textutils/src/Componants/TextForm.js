import React,{useState} from 'react'



export default function TextForm(props) {

  // UpperCase LOgic
  const headerUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Covert UpperCase","success");
  }

  // Lover Case Logic
  const headerlower = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Covert LowerCase","success");
  }

  // Clear Text
  const headerClear = () =>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Clear Text","success");
  }
  const handleOnChange = (event)=>{
    
    setText(event.target.value);
  }
  
  // Copy Text
  const headerCopy = () =>{

    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text","success");
   
  }

  // Remove the Extra Space 
  const headerExtraSpace = () =>{
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.showAlert("removed Extra Space","success");
  }
  
  const [text, setText] = useState("");
 
  return (
    <>
      <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>{props.header}</h2>
        <div className = "mb-3">
          <textarea className = "form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8" style={{backgroundColor:props.mode === 'dark'?'#313c47':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
          
        </div>
        <button className = "btn btn-primary mx-1" onClick={headerUpClick}>Convert UpperCase</button>
        <button className = "btn btn-primary mx-1" onClick={headerlower}>Convert LowerCase</button>
        <button className = "btn btn-primary mx-1" onClick={headerClear}>Clear</button>
        <button className = "btn btn-primary mx-1" onClick={headerCopy}>Copy Text</button>
        <button className = "btn btn-primary mx-1" onClick={headerExtraSpace}>Remove Space</button>

      </div>

      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <p >word {text.split(' ').length}, charecter {text.length}</p>
        <h2>Preview</h2>
        <hr />
        <p>{text}</p>
      

      </div>

    
  </>
 

  )
}
