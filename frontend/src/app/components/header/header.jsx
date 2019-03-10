import React from 'react';
import { HeaderForm } from '../header-form/header-form';
import './header.scss';


export const Header = () => {
  return (
    <div className='header'>
      <div className='header__shading'/>
      <div className='header__title'>Film library</div>
      <HeaderForm/>
    </div>
  )
};
