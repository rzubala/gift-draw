import React from "react";
import InputText from '../UI/InputText/InputText'
import classes from "./Person.module.css";

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <InputText className={classes.PersonName} placeholder='Imię'/>
      <InputText className={classes.PersonEmail} placeholder='Email'/>
    </div>
  );
};

export default Person;
