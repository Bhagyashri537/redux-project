import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = {counter:0, showCounter:true}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state ) {state.counter++},
    decrement(state) {state.counter--},
    increase(state, action) {state.counter = state.counter + action.payload},
    decrease(state, action) {state.counter = state.counter - action.payload},
    toggler(state) {state.showCounter = !state.showCounter}
  }
})

const initailAuthState = {
  isAuthenticated : false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState : initailAuthState,
  reducers : {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    }
  }
})

const store = configureStore({
  reducer: {counter : counterSlice.reducer, auth: authSlice.reducer}
});

export const counterAction = counterSlice.actions;
export const authActions = authSlice.actions

export default store;