import React from 'react';
import { MyInputProps } from '../../Types/InputType';
import './styles.scss';


export default function Input({type, onChange, placeholder, value, style, id}: MyInputProps) {
  return (
    <input type={type} id={id} style={style} onChange={onChange} placeholder={placeholder} value={value}/>
  )
}
