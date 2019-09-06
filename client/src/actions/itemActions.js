import axios from 'axios';
import dispatch from 'redux-thunk';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPDATE_PROFILE } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading);
    axios
        .get('/api/profiles')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const updateProfile = update => (id) => {
    axios
        .get('/api/profiles/' + id)
        .then(res =>
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        )
};

export const addItem = item => dispatch => {
    axios
        .post('/api/games', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
