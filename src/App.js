import React from "react"
import logo from "./logo.svg"
import "./App.css"
import CV from "./components/cv"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CV/>
      </header>
    </div>
  )
}

export default App
