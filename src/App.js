import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1> {count}</h1>
      <Router>
        <Link to="/">home</Link>
        <Link to="/first">first</Link>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/first" component={First} />
        </Switch>
      </Router>
      <button onClick={() => { setCount(count + 1) }}>incre</button>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <p>homeGuru</p>
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
