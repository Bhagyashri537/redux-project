import { useDispatch } from 'react-redux';
import { uiActions } from '../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartHandler = () => {
     dispatch(uiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
