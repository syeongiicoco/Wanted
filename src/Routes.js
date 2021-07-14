import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={ Nav} /> */}
          <Route exact path="/header" component={Header} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
