import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {};

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state, action) {
            state.cartIsVisible = !state.cartIsVisible; //Not really mutating the state here, the state is being copied and returned behind the scenes
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;