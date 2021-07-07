import React,{useState,useEffect} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';

import Welcome from './components/WelcomePage';
import Characters from './components/CharacterList';
import Character from './components/Character';
import Locations from './components/LocationsList';

const axios = require('axios')
export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const req = async () => {
      let res = await axios.get("https://rickandmortyapi.com/api/character");
      let result = res.data.results;
      setCharacters(result);

      let next = res.data.info.next;

      while(next!='' || undefined){
        res = await axios.get(next);
        result = res.data.results;
        next = res.data.info.next;
        result.map(char => {
          setCharacters(prevState =>([...prevState,char]))
        });
      }
      setData(characters);
    };
    req();
  }, []);


  return (
    <main>
      <Header />
      <Route exact path='/' children={<Welcome characters={characters}/>}/>
      <Route path='/characterlist' children={<Characters characters={characters}/>}/>
      <Route path='/character' children={<Character/>}/>

      <Route path='/locationlist' component={Locations}/>
    </main>
  );
}
