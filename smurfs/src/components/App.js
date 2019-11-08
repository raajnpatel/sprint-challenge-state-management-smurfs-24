import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SmurfForm from "./SmurfForm";
import Smurf from "./Smurf";
import "./App.css";
import { getSmurfs } from "../actions";

function App() {
    const dispatch = useDispatch();
    const smurfs = useSelector(state => state.smurfs);
    const isFetching = useSelector(state => state.isFetching);
    const isPosting = useSelector(state => state.isPosting);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(getSmurfs());
    }, [dispatch]);

    if (isFetching) return <h2>loading...</h2>;

    if (isPosting) return <h2>adding smurf...</h2>;

    if (error)
        return (
            <img src={`https://http.cat/${error}`} alt={`error code: ${error}`} />
        );

    return (
        <div className="App">
            <h1>Smurf Village!</h1>
            <SmurfForm />
            {smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                );
            })}
        </div>
    );
}

export default App;
