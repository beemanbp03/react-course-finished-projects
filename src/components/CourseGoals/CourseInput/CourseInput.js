import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`

  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input, label{
    color: red;
  }

  &.invalid input {
    border-color: red;
    background: rgb(237, 207, 204);
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (enteredValue.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input style={{borderColor: isValid ? 'black' : 'red'}}type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
