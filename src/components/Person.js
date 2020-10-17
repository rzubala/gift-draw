import React from "react";

import classes from './Person.module.css';

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <div className={classes.PersonName}>Name</div>
      <div className={classes.PersonEmail}>Email</div>
    </div>
  );
};

export default Person;
