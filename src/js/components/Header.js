import PropTypes from 'prop-types';
import React from 'react';
import {Search} from './Search.js';
import {SwitchTheme} from './SwitchTheme.js';
import '../../css/components/Header.css'


export const Header = ({handleFormSubmit}) => {

  return(
    <header className="Header">
      <h1 className="Header-title"> DevFinder </h1>
      <SwitchTheme />
      <Search
      submit = {handleFormSubmit}
      />
    </header>
  )

}
Header.propTypes = {
  handleFormSubmit : PropTypes.func,
};
