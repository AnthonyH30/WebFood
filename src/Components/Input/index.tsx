import React from 'react';
import { MyInputProps } from '../../Types/InputType';
import './styles.scss';


export default function Input({type, onChange, placeholder, value}: MyInputProps) {
  return (
    <input type={type} onChange={onChange} placeholder={placeholder} value={value}/>
  )
}
