import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const cartHandler = () => {
     dispatch(uiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
