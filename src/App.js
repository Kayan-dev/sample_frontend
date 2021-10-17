import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import PlatePage from "./Pages/OverviewPages/PlatePage";
import SamplePage from "./Pages/OverviewPages/SamplePage";
import Navigation from "./components/Navigation";
import Particles from "react-particles-js";
import { ParticleOptions } from "./components/particles/particles";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Particles className="particles" params={ParticleOptions} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/plates" component={PlatePage} />
        <Route path="/samples" component={SamplePage} />
      </Switch>
    </div>
  );
}

export default App;
