import React, { forwardRef} from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

  // Translate from internal fn and outside parent 
  // DOENST WORK IDK WHY, BUT IM P SURE U ONLY NEED FORWARDREF
//   useImperativeHandle(ref, () => {
//     return {
//       focus: () => inputRef.current.focus()
//     };
//   });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
      />
    </div>
  );
});

export default Input;
