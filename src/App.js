import React, {useState, useEffect} from "react";
import {Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <nav>
          <h1>Lambda Eats</h1>
          <div>  
            <Link to="/">Home</Link>
            <Link to="/pizza">Pizza?</Link>
          </div>
        </nav>
      </div>
    </>
  );
};
export default App;
