import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        //
        props.onAddExpense(expenseData);
    }

    //Handle Expense Form dropdown clicks
    const handleClick = () => {
        setIsClicked(prev => !prev);
    }


    if (!isClicked) {
        return (
            <div className="new-expense">
                <button onClick={handleClick}>Add New Expense</button>
            </div>
        )
    } else {
        return (
            <div className="new-expense">
                <ExpenseForm onClick={handleClick} onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        )
    }

};

export default NewExpense;