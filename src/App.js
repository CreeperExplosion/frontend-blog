import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function App() {
  return (
    <React.Fragment>

      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
