import React, {useEffect, useState} from "react";
import InputText from '../UI/InputText/InputText'
import PersonData from '../../domain/person'
import classes from "./Person.module.css";

const Person = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState()
  
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
    const id = props.data.id
    if (!id || id.length === 0) {
      setId('')
    } else {
      setId(id)
    }
  }, [props.data])

  const onNameChange = (value) => {
    setName(value)
    props.onUpdate(new PersonData(id, value, email))
  }

  const onEmailChange = (value) => {
    setEmail(value)
    props.onUpdate(new PersonData(id, name, value))
  }

  return (
    <div className={classes.Person}>
      <InputText value={name} changed={(event) => onNameChange(event.target.value)} className={classes.PersonName} placeholder='Imię'/>
      <InputText value={email} changed={(event) => onEmailChange(event.target.value)} className={classes.PersonEmail} placeholder='Email'/>
    </div>
  );
};

export default Person;
