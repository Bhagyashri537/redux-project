import {useSelector, useDispatch} from 'react-redux';
import { counterAction } from './Store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state=>state.counter.counter);
  const showToggle = useSelector(state=> state.counter.showCounter);
  
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggler())
  }
  const incrementHandler =()=>{
     dispatch(counterAction.increment())
    
  }

  const decrementHandler =()=>{
    dispatch(counterAction.decrement())
   
  }
  const incrementHandlerBy5 =()=>{
    dispatch(counterAction.increase(5))
   
 }

 const decrementHandlerBy5 =()=>{
   dispatch(counterAction.decrease(5))
   
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggler</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandlerBy5}>IncrementBy5</button>
      <button onClick={decrementHandlerBy5}>decrementBy5</button>
     
      </div>
    </main>
  );
};
export default Counter;