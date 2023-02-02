import React from "react";

// Adding module.css enables CSS Modules
// Using CSS modules avoid namespace collision for CSS classes. 
import styles from './Button.module.css';

// import styled from "styled-components";

// // Not JSX, this is 'styled components' another library for css
// // Cannot use these stylings in another component in the app, exclusive to this file
// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   /* margin-left: 40%; */
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (min-width: 768px){
//   width: auto;
// }

// // Special Sudo selector use &
// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// ;`

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
