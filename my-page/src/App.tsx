import React from 'react';
import './App.css';
import data from './user.json';

const user = data;

const App = () => (
  <div className="App">
    <h1>Hello! I am {user.firstName} {user.secondName}.</h1>
    <h2>{user.shortBiography}</h2>
    <h3>My contact: {user.publicContact}</h3>
  </div>
)

export default App;
