import React from 'react';
import Header from './Components/Header';
import MainHome from './Components/MainHome';
import Footer from './Components/Footer';
import MainBosses from './Components/MainBosses';
import Mainstage from './Components/Mainstage';
import Programador from './Components/Programador';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Header/>
      <Switch>

     

      <Route exact path={"/Home" || "/"}>
        <MainHome/>
      </Route>

      <Route exact path="/">
        <MainHome/>
      </Route>

      <Route exact path="/Bosses">
        <MainBosses/>
      </Route>

      <Route exact path="/Stage">
        <Mainstage/>
      </Route>

      <Route exact path="/Programador">
        <Programador/>
      </Route>

      

      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
