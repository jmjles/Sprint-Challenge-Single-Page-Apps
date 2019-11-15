import React, { useEffect, useState } from "react";

import CharacterCard from './CharacterCard';
import Search from './SearchForm';

import {Grid, ListItemText} from '@material-ui/core'
const axios = require('axios');

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters,setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  let x=[];
  useEffect(() => {
    (async()=>{
      let res = await axios.get('https://rickandmortyapi.com/api/character');
      x = res.data.results;
      setCharacters(x);
      setData(x);
    })();
  }, []);

  return (
    <section className="character-list">
      <Search search={search} setSearch={setSearch} characters={characters} data={setData}/>
      <Grid container justify='space-around' spacing={4}>
      {
        data.map((character)=>(
            <CharacterCard character={character} key={character.id}/>
        ))
      }
      </Grid>
    </section>
  );
}
