import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">home</Link>
        <Link to="/first">first</Link>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/first" component={First} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <p>home</p>
    </div>
  );
};

const First = () => {
  return (
    <div>
      <p>first</p>
    </div>
  );
};


export default App;
