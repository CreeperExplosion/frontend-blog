import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Page from './component/Page';
import Navigation from './component/Navigation';
import Foot from './component/Foot';



const Style = styled.div`

`;

function App() {
  return (
    <Style>

      <Router>
      <Navigation/>
      <Page>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
      </Page>


      <Foot/>
      </Router>
      
      
    </Style>
  );
}

export default App;
