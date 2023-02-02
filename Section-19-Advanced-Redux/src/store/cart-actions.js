import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log('Fetch');
      const response = await fetch(
        'https://react-advanced-redux-6e18f-default-rtdb.firebaseio.com/cart.json',
        { method: 'GET' },
      );

      if (!response.ok) {
        throw new Error('Fetch Respone Failed!');
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        }),
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      console.log('Put');
      const response = await fetch(
        'https://react-advanced-redux-6e18f-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) },
      );

      if (!response.ok) {
        throw new Error('Sending Cart Data Failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};
