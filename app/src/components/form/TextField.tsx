import React from 'react';
import FormFieldProps from './FormFieldProps'
import {Input} from 'antd'

interface P extends FormFieldProps {

}

export default function TextField(props: P) {
    const {name, label, value, formikBag} = props
    const {values, handleChange} = formikBag

    return (
        <div>
            {label ? <label>{label}</label> : null}
            <Input
                name={name}
                value={value ? value : values[name]}
                onChange={handleChange}/>
        </div>
    )
}