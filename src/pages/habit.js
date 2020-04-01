import React from 'react';
import { Link } from 'gatsby';
import NewHabitCard from '../components/habitpage/newhabitcard';
import Navbar from '../components/navbar';
import HabitList from '../components/habitpage/habitList';

const Habit = () => (
  <div>
    <Navbar></Navbar>
    <div css={{ display: 'grid', justifyItems: 'center' }}>
      <Link to='/profile'>Go back to Profile page</Link>
      <NewHabitCard></NewHabitCard>
      <HabitList></HabitList>
    </div>
  </div>
);

export default Habit;
