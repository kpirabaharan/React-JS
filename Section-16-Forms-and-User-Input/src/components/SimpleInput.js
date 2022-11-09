import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    // To prevent http request from being sent add event.preventDefault();
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name Must Not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
