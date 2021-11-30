import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function AddExercise() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate()

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date }
    const response = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.status === 201) {
      alert('Successfully added the exercise!')
    } else {
      alert(`Failed to add the exercise, status code = ${response.status}`)
    }
    navigate('/')
  };

  return (
    <>
      <h1>Add Exercise</h1>
      <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)} />
      <input 
        type="text"
        placeholder="Reps"
        value={reps}
        onChange={e => setReps(e.target.value)} />
      <input 
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={e => setWeight(e.target.value)} />
      <input 
        type="text"
        placeholder="Unit"
        value={unit}
        onChange={e => setUnit(e.target.value)} />
      <input 
        type="text"
        placeholder="Date"
        value={date}
        onChange={e => setDate(e.target.value)} />
      <button 
        onClick={addExercise}
      >Add</button>
    </>
  )
};

export default AddExercise