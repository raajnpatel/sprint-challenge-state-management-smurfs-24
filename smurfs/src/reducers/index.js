import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    POST_START,
    POST_SUCCESS,
    POST_ERROR,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_ERROR,
    SET_SMURF_TO_EDIT,
    PUT_START,
    PUT_SUCCESS,
    PUT_ERROR
} from "../actions";

const initialState = {
    smurfs: [],
    smurfToEdit: null,
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    isPutting: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload],
                isFetching: false
            };
        case FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
    }
};
