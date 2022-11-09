import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((enteredName) => enteredName.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (enteredEmail) =>
      enteredEmail.trim() !== '' && enteredEmail.trim().includes('@'),
  );

  // Default Case
  let formIsValid = false;

  // Change to true if all inputs are valid
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    // To prevent http request from being sent add event.preventDefault();
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) return;

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputError && <p className="error-text">Name Must Not be Empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputError && (
          <p className="error-text">
            Email Must Not be Empty and Needs to Contain @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
