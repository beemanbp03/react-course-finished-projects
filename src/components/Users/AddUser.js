import React, {useState, useRef} from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errorState, setErrorState] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = (nameInputRef.current.value);
        const enteredUserAge = (ageInputRef.current.value);

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setErrorState({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setErrorState({
                title: 'Invalid Input',
                message: 'Please enter a valid age (non-empty values).'
            })
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    }

    const errorHandler = () => {
        setErrorState(null);
    }

    return (
        <Wrapper>
            {errorState && <ErrorModal errorTitle={errorState.title} errorMessage={errorState.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
    
}

export default AddUser;