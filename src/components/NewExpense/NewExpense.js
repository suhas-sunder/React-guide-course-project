import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpense(expenseData);
    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;