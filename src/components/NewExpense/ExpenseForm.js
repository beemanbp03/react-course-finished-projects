import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] =  useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log("Title has been changed to: " + enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log("Amount has been changed to: $" + enteredAmount);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate.replace(/-/g, '\/'))
        };

        console.log("New Expense Added: \n" 
                + expenseData.title + "\n" 
                + expenseData.amount + "\n" 
                + expenseData.date);

        //This is what triggers the saveExpenseData() method in NewExpense.js
        props.onSaveExpenseData(expenseData);
        props.onClick(false);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const handleCancel = () => {
        props.onClick(false);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='date' min="01-01-2019" max="12-31-2029" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;