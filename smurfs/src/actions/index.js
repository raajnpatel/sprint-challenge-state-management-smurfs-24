import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_ERROR, payload: err.response.status });
        });
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_START });
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            dispatch({ type: POST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: POST_ERROR, payload: err.response.status });
        });
};


