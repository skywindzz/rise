import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/navbar';

const Planning = () => (
  <div>
    <Navbar></Navbar>
    <p>This is planning page</p>
    <Link to='/profile'>Go back to Profile page</Link>
    <p>identify(what kind of person you want to be?</p>
    <p>what value woudl this identity uphold?</p>
    <p>waht kind of behavior(habit) would align with that value</p>
    <p>inspiring quites and ideas for action</p>
  </div>
);

export default Planning;
