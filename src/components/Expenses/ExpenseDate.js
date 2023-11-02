import './ExpenseDate.css';

function ExpenseDate(props) {
    console.log("EXPENSE DATE IS: " + props.expenseDate);
    const month = props.expenseDate.toLocaleString('en-US', {month:'long'});
    const day = props.expenseDate.toLocaleString('en-US', {day:'2-digit'});
    const year = props.expenseDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );

}

export default ExpenseDate;