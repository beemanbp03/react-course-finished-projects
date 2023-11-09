import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state, action) {
            state.cartIsVisible = !state.cartIsVisible; //Not really mutating the state here, the state is being copied and returned behind the scenes
        },
        showNotification(state, action) {
            state.notification = { 
                status: action.payload.status, 
                title: action.payload.title, 
                message: action.payload.message 
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;