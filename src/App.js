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

     

      <Route exact path={"/Page_Dark_Souls/Home" || "/Page_Dark_Souls/"}>
        <MainHome/>
      </Route>

      <Route exact path="/Page_Dark_Souls/Bosses">
        <MainBosses/>
      </Route>

      <Route exact path="/Page_Dark_Souls/Stage">
        <Mainstage/>
      </Route>

      <Route exact path="/Page_Dark_Souls/Programador">
        <Programador/>
      </Route>

      

      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
