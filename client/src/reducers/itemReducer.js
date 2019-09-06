import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPDATE_PROFILE } from '../actions/types';

const initialState = {
    items: [],
    games: [],
    rank: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case UPDATE_PROFILE:
            return {
                ...state,
                $add: [action.payload, state.rank],

            };

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}