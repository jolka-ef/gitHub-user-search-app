import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {SunIcon} from './Icons/SunIcon.js';
import {MoonIcon} from './Icons/MoonIcon.js';
import '../../css/components/SwitchTheme.css'

export const SwitchTheme = ({className}) => {
  const [theme, switchTheme] = useState('dark')

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    switchTheme(newTheme);
    document.documentElement.setAttribute("data-theme",theme);
  }

  return (
    <button
      className='SwitchTheme'
      onClick={handleClick}
    >
      <span> {theme} </span>
      <span> {theme === 'light' ?
            < SunIcon className='SwitchTheme-icon'/>
            :< MoonIcon className='SwitchTheme-icon'/>}
      </span>

    </button>
  )
};
SwitchTheme.propTypes = {
  className : PropTypes.string,
};
