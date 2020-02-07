import React from 'react';
import HomeScreen from './homeScreen'
import ScreenOne from './screenOne';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/screenone" component={ScreenOne} />
      </Switch>
    </Router>
  );
}

export default App;
