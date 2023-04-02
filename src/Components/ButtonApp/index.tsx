import React from 'react';
import './styles.scss';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function ButtonApp( props : Props) {
  return (
    <button className='button' {...props} />
  )
}
