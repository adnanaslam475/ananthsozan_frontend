import React from 'react';
import * as actionTypes from './actionTypes'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const Store = React.createContext();
Store.displayName = 'Store';
let authData = JSON.parse(localStorage.getItem('auth'))
let token = JSON.parse(localStorage.getItem('token'))
export const initialState = {
    user: authData || null,
    isLoading: false,
    token,
    users: null
};

export const bookTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return { ...state, isLoading: action.payload }
        case actionTypes.AUTH_SUCCESS:
            const { user, token } = action.payload
            localStorage.setItem('auth', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            return { ...state, isLoading: false, user, token }
        default:
            return state;
    }
};

export const useStore = () => React.useContext(Store);
export const StoreProvider = ({ children, initialState, reducer }) => {
    const [globalState, dispatch] = React.useReducer(reducer, initialState);
    // console.log('globale', globalState, dispatch)
    return <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>;
};