import React, { useState, useEffect, useCallback } from "react";
import Person from "../Person/Person";
import Button from '../UI/Button/Button'
import classes from "./Persons.module.css";
import PersonData from "../../domain/person";

const Persons = (props) => {
  const [persons, setPersons] = useState([]);

  const onNewPerson = () => {
    const newPersons = [
      ...persons,
      new PersonData(persons.length + 1, "", ""),
    ];
    setPersons(newPersons);    
  }

  let personRows = persons.map((p) => (
    <Person key={Math.random()} data={p} />
  ));
  if (persons.length === 0) {
      personRows = (<div className={classes.InfoText}>Proszę dodać osoby i adresy mailowe</div>)
  }

  return (
    <React.Fragment>
      <div className={classes.Persons}>{personRows}</div>
      <div className={classes.Buttons}>
          <Button btnType='Success' onClicked={onNewPerson}>Dodaj</Button>
          <Button btnType='Danger'>Losuj</Button>
      </div>
    </React.Fragment>
  );
};

export default Persons;
