const redux = require('redux');

//Reducer
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrament') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

//Store Creation
const store = redux.createStore(counterReducer);

//Subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

//Action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrament' });
store.dispatch({ type: 'increment' });
