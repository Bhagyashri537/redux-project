import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './components/store/uiSlice';
import Notification from './components/UI/Notification';

let initial = true;

function App() {
   
  const showCart = useSelector(store => store.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title : 'pending..',
      message : 'sending cart data '
    }))
   
      const sendcartData = async() => {

       
       const res = await  fetch('https://react-project-57057-default-rtdb.firebaseio.com/cart.json',{
        method: "PUT",
        body: JSON.stringify(cart)
      })
      if(!res.ok){
        throw new Error ('sending cart data failed')
      }
      const resData = await res.json()
      dispatch(uiActions.showNotification({
        status: 'sucess',
        title : 'sucess..',
        message : 'sent cart data'
      }))
      }
      if(initial){
        initial=false;
        return;
      }
      sendcartData().catch(err => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title : 'error..',
          message : 'sent cart data failed'
        }))
      })
    },[cart, dispatch])
    
  return (
    <>
    {notification && <Notification 
      title={notification.title}
      status={notification.status}
      message={notification.message}
    />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
