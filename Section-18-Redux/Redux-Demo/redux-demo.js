const redux = require('redux');

// Reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment')
    return {
      counter: state.counter + 1,
    };
  if (action.type === 'decrement')
    return {
      counter: state.counter - 1,
    };
  return state;
};

// Redux Data Store (deprecated use configureStore)
const store = redux.createStore(counterReducer);

// Subscription Function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Call the subscribe function
store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });