import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Layout from './component/Layout';
import Navigation from './component/Navigation';

function App() {
  return (
    <React.Fragment>

      <Router>
      <Navigation/>
      <Layout>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>

      </Router>
      
    </React.Fragment>
  );
}

export default App;
