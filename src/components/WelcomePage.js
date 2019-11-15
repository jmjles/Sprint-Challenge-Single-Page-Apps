import React from "react";
import {Button,Typography as Font} from '@material-ui/core';
import {Link} from 'react-router-dom';
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Button component={Link} to='/characterlist' color='primary' variant='contained'>
        <Font variant='button'>
          View Charaters
        </Font>
      </Button>
      <Button component={Link} to='/locationlist' color='primary' variant='contained'>
        <Font variant='button'>
          View Locations
        </Font>
      </Button>
    </section>
  );
}
