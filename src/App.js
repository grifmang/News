import React from 'react';
import { Route } from "react-router-dom";
import YourNews from "./components/YourNews";
import './App.css';
import LandingPage from "./components/layout/LandingPage";

function App(props) {
  return (
    <>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/YourNews" component={YourNews} />
    </>
  );
}

export default App;
