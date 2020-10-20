import React from "react";
import Persons from "./components/Persons/Persons";
import Santa from './components/UI/Santa/Santa'
import Snow from './components/UI/Snow/Snow'

function App() {
  return (
    <Snow>
      <Santa />
      <Persons />
    </Snow>
  );
}

export default App;
