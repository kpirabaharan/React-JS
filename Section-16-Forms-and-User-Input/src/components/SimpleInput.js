import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    // if (enteredName.length > 0) {
    //   setEnteredNameTouched(true);
    //   setEnteredNameIsValid(true);
    // }
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    // To prevent http request from being sent add event.preventDefault();
    event.preventDefault();
    setEnteredNameTouched(true);

    // State Method
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);

    // Ref Method
    const inputVal = nameInputRef.current.value;
    console.log(inputVal);

    setEnteredName('');
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
