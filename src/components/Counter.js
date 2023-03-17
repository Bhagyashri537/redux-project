import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state=>state.counter)
 
  
  const incrementHandler =()=>{
     dispatch({type : 'increment'})
    
  }

  const decrementHandler =()=>{
    dispatch({type : 'decrement'})
    
  }
  const incrementHandlerBy5 =()=>{
    dispatch({type : 'incrementBy5'})
  }

 const decrementHandlerBy5 =()=>{
   dispatch({type : 'decrementBy5'})
   
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
      
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandlerBy5}>IncrementBy5</button>
      <button onClick={decrementHandlerBy5}>decrementBy5</button>

      </div>
    </main>
  );
};

export default Counter;