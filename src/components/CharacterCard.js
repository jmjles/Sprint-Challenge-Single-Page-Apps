import React from "react";
import {Card, Typography as Font,Button,Grid} from '@material-ui/core';
export default function CharacterCard({character:{name,species,image,status}}) {
  return (
    <Grid item>
        <Card align='center' elevation={3}>
          <Font variant='h5'>
              {name}
          </Font>
          <img src={image} alt={`${name}'s Picture`} height='150px'/>
          <Font align='left'>{`Species: ${species} | ${status}`}</Font>
        </Card>
    </Grid>
  )
}
