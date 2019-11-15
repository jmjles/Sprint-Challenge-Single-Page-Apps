import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';

import Welcome from './components/WelcomePage';
import Characters from './components/CharacterList';
import Character from './components/Character';
import Locations from './components/LocationsList';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={Welcome}/>
      <Route path='/characterlist' component={Characters}/>
      <Route path='/character' component={Character}/>

      <Route path='/locationlist' component={Locations}/>
    </main>
  );
}
