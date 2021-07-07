import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {Card, Typography as Font,Button,Grid} from '@material-ui/core';
export default function CharacterCard({character:{name,species,image,status,url}}) {
  
  return (
    <Grid item>
        <Card align='center' elevation={3}>
          <Font variant='h5'>
              {name}
          </Font>
          <img src={image} alt={`${name}'s Picture`} height='150px'/>
          <Font align='left'>{`Species: ${species} | ${status}`}</Font>
          <Button variant='contained' color='primary' component={Link} to={{pathname:'/character', state:{url:url}}}>
            <Font variant='button'>
              View Character
            </Font>
          </Button>
        </Card>
    </Grid>
  )
}
