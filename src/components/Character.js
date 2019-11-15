import React,{useEffect,useState} from "react";
import {Card, Typography as Font,Button,Grid} from '@material-ui/core';

const axios = require('axios');

export default function Character({location:{state:{url}}}) {
    const [character,setCharacter] = useState([])
    useEffect(()=>{
        const req = async() => {
            const res = await axios.get(url)
            console.log(res)
            setCharacter(res.data);
        }
        req();
    },[])
  return (
    <Grid item>
        <Card align='center' elevation={3}>
          <Font variant='h5'>
              {character.name}
          </Font>
          <img src={character.image} alt={`${character.name}'s Picture`} height='150px'/>
          <Font align='left'>{`Species: ${character.species} | ${character.status}`}</Font>
        </Card>
    </Grid>
  )
}
