import React from 'react'
import {Link} from "react-router-dom";
import Button from './Button'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to ="/about">About</Link>
          </li>
         
        </ul>
        <form className="d-flex">
          
        </form> 
        <div className={`form-check form-switch text-${props.mode === 'light'?'Dark':'light'}`}>
        <input className="form-check-input" onClick = {props.toggeMode} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}