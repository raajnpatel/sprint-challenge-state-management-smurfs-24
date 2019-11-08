import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSmurf, setSmurfToEdit } from '../actions';

function Smurf({ smurf }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteSmurf(id));
  }

  const changeSmurfToEdit = smurf => {
    dispatch(setSmurfToEdit(smurf));
  }

  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>

    </div>
  )
}

export default Smurf;
