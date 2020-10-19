import React, { useState } from "react";
import Person from "../Person/Person";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import classes from "./Persons.module.css";
import PersonData from "../../domain/person";
import { handlePersons } from "../../utils/email";

const Persons = (props) => {
  const [persons, setPersons] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onNewPerson = () => {
    let id = 1;
    if (persons.length > 0) {
      id =
        persons.reduce(
          (max, person, index, persons) =>
            persons[index].id > max ? persons[index].id : max,
          0
        ) + 1;
    }
    const newPersons = [...persons, new PersonData(id, "", "")];
    setPersons(newPersons);
  };

  const onSend = async () => {
    setLoading(true);
    const result = await handlePersons(persons);
    setResult(result);
    setLoading(false);
  };

  const onPersonUpdated = (person) => {
    const index = persons.findIndex((item) => item.id === person.id);
    const updatedPersons = [...persons];
    updatedPersons[index] = person;
    setPersons(updatedPersons);
  };

  let personRows = persons.map((p) => (
    <Person key={p.id} data={p} onUpdate={onPersonUpdated} />
  ));
  if (persons.length === 0) {
    personRows = (
      <div className={classes.InfoText}>
        Proszę dodać osoby i adresy mailowe
      </div>
    );
  }
  let loader = null;
  if (loading) {
    loader = (
      <div className={classes.Center}>
        <Loader />
      </div>
    );
  }
  let buttons = null;
  if (!loading && (!result || result.length === 0)) {
    buttons = (
      <div className={classes.Center}>
        <Button btnType="Success" onClicked={onNewPerson}>
          Dodaj
        </Button>
        <Button btnType="Danger" onClicked={onSend}>
          Losuj
        </Button>
      </div>
    );
  }
  let info = null;
  if (!loading && result && result.length > 0) {
    info = (
      <div className={classes.Center}>
        {result === "ok" ? (
          <div className={[classes.InfoText, classes.Success].join(' ')}>Wiadomości zostały wysłane.</div>
        ) : null}
        {result === "error" ? (
          <div className={[classes.InfoText, classes.Error].join(' ')}>Wystąpił błąd podczas wysyłania wiadomości!</div>
        ) : null}
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.Persons}>{personRows}</div>
      {buttons}
      {loader}
      {info}
    </React.Fragment>
  );
};

export default Persons;
