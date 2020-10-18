import React, { useState, useEffect, useCallback } from "react";
import Person from "../Person/Person";
import Button from '../UI/Button/Button'
import classes from "./Persons.module.css";
import PersonData from "../../domain/person";

const Persons = (props) => {
  const [persons, setPersons] = useState([]);

//   useEffect(() => {
//     const newPersons = [
//       ...persons,
//       new PersonData("Jan Nowak", "jan.nowak@example.com"),
//       new PersonData("Jan Kowalski", "jan.kowalski@example.com"),
//     ];
//     setPersons(newPersons);
//   }, []);

  let personRows = persons.map((p) => (
    <Person key={p.email} name={p.name} email={p.email} />
  ));
  if (persons.length === 0) {
      personRows = (<div className={classes.InfoText}>Proszę dodać osoby i adresy mailowe</div>)
  }

  return (
    <React.Fragment>
      <div className={classes.Persons}>{personRows}</div>
      <div className={classes.Buttons}>
          <Button btnType='Success'>Dodaj</Button>
          <Button btnType='Danger'>Losuj</Button>
      </div>
    </React.Fragment>
  );
};

export default Persons;
