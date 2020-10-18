import React from 'react'
import classes from './InputText.module.css'

const InputText = props => {
    return (<input value={props.value} onChange={props.changed} className={classes.InputText} type="text" placeholder={props.placeholder} />)
}

export default InputText