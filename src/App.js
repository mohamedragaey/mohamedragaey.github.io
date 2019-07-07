import React from "react"
import logo from "./logo.svg"
import "./App.css"
import CssBaseline from "@material-ui/core/CssBaseline"
import SEO from "./components/seo"

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <SEO title='Home' description='Mohamed Ragaey UI Developer with a good sense of humor. '/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
