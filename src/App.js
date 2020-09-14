import React from 'react';
import './App.css';
import { Link, Router } from '@reach/router';
import Home from "./components/home";
import April from "./components/april";
import May from "./components/may";
import June from "./components/june";
import July from "./components/july";
import August from "./components/august";
import September from "./components/sept";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="Container">
      <Link className="btn btn-outline-dark" href="/march">March</Link>
      <Link className="btn btn-outline-dark" href="/april">April</Link>
      <Link className="btn btn-outline-dark" href="/may">May</Link>
      <Link className="btn btn-outline-dark" href="/june">June</Link>
      <Link className="btn btn-outline-dark" href="/july">July</Link>
      <Link className="btn btn-outline-dark" href="/august">August</Link>
      <Link className="btn btn-outline-dark" href="/september">September</Link>
      <Router class="routes">
      <Home path="/march" />
      <April path="/april" />
      <May path="/may" />
      <June path="/june" />
      <July path="/july" />
      <August path="/august" />
      <September path="/september" />
      </Router>
    </div>
  );
}

export default App;
