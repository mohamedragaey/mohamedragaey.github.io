import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../App"
import Resume from "../pages/resume"
import Notfound from "./NotFound"

class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/resume' component={Resume}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
    )
  }

}

export default Routing
