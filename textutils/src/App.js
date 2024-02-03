
import './App.css';

import TextForm from './Componants/TextForm';
import Navbar from './Componants/Navbar';
import React, { useState } from 'react'
import Alert from './Componants/Alert';
import About from './Componants/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggeMode = ()=>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.backgroundColor = "#313c47";
      showAlert("Dark Mode is Enable", "success");
      

    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is Enable", "success");
    
    }
  }



  return (
    <>
    
       <Router>
       <Navbar mode= {mode}  toggeMode = {toggeMode}/>
       <Alert alert = {alert}/>

         <Routes>
             <Route exact path ="/about" element = {<About mode = {mode} />}></Route>
      
             <Route exact path="/" element ={<TextForm header= "Enter text Here !.." mode = {mode} showAlert = {showAlert}/>}></Route>
         </Routes>

       </Router>
    </>
  );
}

export default App;

  
