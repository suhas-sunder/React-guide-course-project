import { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from './Card'

function ExpenseItem({ title, amount, date }) {
  const [expTitle, setExpTitle] = useState(title);

  const clickHandler = () => {
    setExpTitle("Updated!");
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{expTitle}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
