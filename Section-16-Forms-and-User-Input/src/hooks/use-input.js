import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

// State is previous state and action is current/next
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    // Below we want value to update but isTouched to remain the same
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'BLUR') {
    return {
      // Cannot use action.value because in the dispatch for 'BLUR' we didnt
      // send a value to action
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
