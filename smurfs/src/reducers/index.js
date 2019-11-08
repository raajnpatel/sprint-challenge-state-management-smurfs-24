import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload],
                isFetching: false
            }
        default:
            return state;
    }
}