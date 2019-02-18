import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Catalog from "./components/Catalog/catalog";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Nav/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/catalog' component={Catalog}/>
              <Route path='/about' component={About}/>
          </Switch>
          <Footer/>
      </div>
     </Router>
    );
  }
}

export default App;
