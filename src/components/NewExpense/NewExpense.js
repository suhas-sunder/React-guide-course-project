import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);

    // Close edit menu on submit
    editingHandler(false);
  };

  const editingHandler = (editState) => {
    setIsEditing(editState);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => editingHandler(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <button onClick={() => editingHandler(false)}>Cancel</button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      )}
    </div>
  );
}

export default NewExpense;
