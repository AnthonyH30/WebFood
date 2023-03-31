import React from 'react';
import './styles.scss';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Btn( props : Props) {
  return (
    <button {...props} />
  )
}
