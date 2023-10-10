import React, {useRef} from 'react';
import {Button} from "./Button";
import {Input} from './Input.js'
import {SearchIcon} from './Icons/SearchIcon.js'
import '../../css/components/Search.css'

export const Search = (props) => {
  const form = useRef();
  const {submit, searchValue} = props;

  const getValues = (form) => {
    const current = form.current;
    const query = current.query.value.trim().replace(/\s/g, '-');
    return (query)
  };

  return (
    <div role='search'>
      <form
        className="Search"
        method="get"
        ref={form}
        onSubmit={ event => {event.preventDefault() ;submit(getValues(form)) }}
        >
          <SearchIcon className='Search-icon' />
          <Input
            ariaLabel='Search for GitHub users'
            inputClass='Search-input'
            labelClass='VisuallyHidden'
            label='Type a github user name'
            name='query'
            placeholder = 'Search GitHub username...'
            type='search'
            value={searchValue ? searchValue :  undefined}
          />
          <Button
            className='Search-button'
            name='Search'
            type='submit'
          />

      </form>
    </div>
  )
};
