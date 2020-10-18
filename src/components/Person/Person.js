import React, {useEffect, useState} from "react";
import InputText from '../UI/InputText/InputText'
import classes from "./Person.module.css";

const Person = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    const name = props.data.name
    if (!name || name.length === 0) {
      setName('')
    } else {
      setName(name)
    }
    const email = props.data.email
    if (!email || email.length === 0) {
      setEmail('')
    } else {
      setEmail(email)
    }
  }, [props.data])

  const onNameChange = (value) => {
    setName(value)
  }

  const onEmailChange = (value) => {
    setEmail(value)
  }

  return (
    <div className={classes.Person}>
      <InputText value={name} changed={(event) => onNameChange(event.target.value)} className={classes.PersonName} placeholder='Imię'/>
      <InputText value={email} changed={(event) => onEmailChange(event.target.value)} className={classes.PersonEmail} placeholder='Email'/>
    </div>
  );
};

export default Person;
