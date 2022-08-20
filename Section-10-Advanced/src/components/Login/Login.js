import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

// Defined outside main fn because it doesnt not depend on any variables inside Login fn
// More setup up here but within main code its a lot easier
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    console.log("USER_INPUT");
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    console.log("INPUT_BLUR");
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    console.log("PASSWORD_INPUT");
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    console.log("PASSWORD_BLUR");
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // // This useEffect fn only runs after the program file is run and if dependencies are changed
  // // updates when enteredEmail and enteredPassword changes (on every keystroke)
  // useEffect(() => {
  //   // setTimeout allows email and password to check after a set time after user stops typing
  //   const identifier = setTimeout(() => {
  //     // Minimal code as checking both email and password constraints are done at the same time
  //     // true if both are true
  //     // console.log("Check");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   // Cleanup fn runs before useEffect runs next time
  //   return () => {
  //     // Clears previous timeout on new keystroke, constant new timers
  //     // console.log("Check2");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  // By pulling out isValid key from each State we can pass this isValid and not check for validity when value changes
  // Only runs useEffect when valid changes and not value since thats the dependencies now
  // EFFICIENT CODE SINCE ITS ONLY RUNNING WHEN THE KEY PROPERTY CHANGES!!!

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking Form Validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("Cleanup!");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // What Happened = 'USER ENTERED INPUT' what we want stored is event.target.value
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
