import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2022, 7, 7);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 420.69;

  // Return just one element in the outer div, but inside we can have many elements
  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
