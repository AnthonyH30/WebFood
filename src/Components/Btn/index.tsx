import React from 'react';
import { ButtonProps } from '../../Types/ButtonType';
import './styles.scss';


export default function Btn({children, style}: ButtonProps) {
  return (
    <button style={style}>
        {children}
    </button>
  )
}
