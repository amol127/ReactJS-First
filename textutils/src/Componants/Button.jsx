import React from 'react'


export default function Button(props) {
  
  const buttonclick = (event) =>{
    console.log(event.target.value);
 
  } 
// const [number, setnumber] = useState(0)
  return (
    <div className='container d-flex  my-3'>
      <button className=' btn btn-primary border border-warning 'value={props.text} onClick={buttonclick}>{props.text}</button>
    </div>
  )
}
