import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
