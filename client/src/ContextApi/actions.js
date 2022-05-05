import axios from 'axios'
import { LOADING, AUTH_SUCCESS, SUCCESS, ERROR, GET_USER_PROFILE_SUCCESS, GET_USER_DETAILS_SUCCESS } from "./actionTypes";

// export const ShowSnackbar = ({ variant, message }) => {
//     console.log('var_msg', variant, message)
//     return <Snackbar open autoHideDuration={6000} onClose={() => ''}>
//         <Alert onClose={() => ''} severity={variant} sx={{ width: '100%' }}>
//             {message}
//         </Alert>
//     </Snackbar>
// }

export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
    }
}
export const loaderDispatch = (payload) => ({
    type: LOADING,
    payload,
});

export const authSuccess = (payload) => ({
    type: AUTH_SUCCESS,
    payload,
});


export const getUserDetailsSuccess = (payload) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload,
});

export const register = async (values, navigate, dispatch, Snackbar) => {
    dispatch(loaderDispatch(true))
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASEURL}/api/register`, values)
        if (data.user) {
            dispatch(authSuccess(data))
        }
        Snackbar(data.msg, {
            variant: data.user ? SUCCESS : ERROR
        });
        dispatch(loaderDispatch(false))
        data.user && navigate(`/${data.user.userType == 'Master' ? 'master' : 'member'}-dashboard`)
    } catch (error) {
        Snackbar(error.response.data.errmsg || 'Something went wrong', {
            variant: ERROR,
        });
        dispatch(loaderDispatch(false))
    }
}

export const login = async (loginData, navigate, dispatch, Snackbar) => {
    dispatch(loaderDispatch(true))
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASEURL}/api/login`, loginData)
        console.log('reslogin', data)
        dispatch(authSuccess(data))
        Snackbar(data.msg, {
            variant: data.user ? SUCCESS : ERROR
        });
        data.user && navigate(`/${data.user.userType == 'Master' ? 'master' : 'member'}-dashboard`)
    } catch (error) {
        Snackbar(error.response.data.msg || 'Something went wrong', {
            variant: ERROR,
        });
        dispatch(loaderDispatch(false))
    }
}


export const allUsers = async (query, dispatch, Snackbar) => {
    dispatch(loaderDispatch(true))
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASEURL}/api/all_users&${query}`, getHeaders())
        console.log('reslogin', data)
        dispatch(authSuccess(data))
        Snackbar(data.msg, {
            variant: data.user ? SUCCESS : ERROR
        });
    } catch (error) {
        Snackbar(error.response.data.msg || 'Something went wrong', {
            variant: ERROR,
        });
        dispatch(loaderDispatch(false))
    }
}

export const getUserDetails = async (query, dispatch, Snackbar) => {
    dispatch(loaderDispatch(true))
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASEURL}/users/me`, getHeaders())
        console.log('reslogin', data)
        dispatch(getUserDetailsSuccess(data))
        Snackbar(data.msg, {
            variant: data.user ? SUCCESS : ERROR
        });
        dispatch(loaderDispatch(false))
    } catch (error) {
        Snackbar(error.response.data.msg || 'Something went wrong', {
            variant: ERROR,
        });
        dispatch(loaderDispatch(false))
    }
}
export const bookClass = (value, dispatch, Snackbar) => {
    try {

    } catch (error) {

    }
}