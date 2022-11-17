import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = (value) => {
    dispatch({
      type: 'increment',
      value,
    });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle', });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(-1)}>Decrement</button>
      </div>
      <div>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <button onClick={() => incrementHandler(-5)}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
