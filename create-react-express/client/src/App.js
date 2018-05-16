import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Stories from './components/Stories';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/stories" component={Stories} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
