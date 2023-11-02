import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const classes = 'expenses ' + props.className;

    //Control for year filter
    const onChangeFilterHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    //Get back an array that has all prop.items with same year as filteredYear (later pass it through ExpensesList as a prop)
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    //Return JSX
    return (
      <li>
        <Card className={classes}>
        <ExpenseFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
        </Card>
      </li>
      );
}

export default Expenses;