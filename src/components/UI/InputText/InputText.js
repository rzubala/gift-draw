import React from 'react'
import classes from './InputText.module.css'

const InputText = props => {
    return (<input className={classes.InputText} type="text" placeholder={props.placeholder} />)
}

export default InputText