import React from 'react';
import { ButtonProps } from '../../Types/ButtonType';
import './styles.scss';


export default function Btn({children}: ButtonProps) {
  return (
    <button>
        {children}
    </button>
  )
}
