import React, { useState } from "react";
import { useNavigate } from "react-router";

function EditExercise({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const navigate = useNavigate()

  const editExercise = async () => {
    const editedExercise = { name, reps, weight, unit, date }
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(editedExercise),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.status === 200) {
      alert('Successfully updated the exercise!')
    } else {
      alert(`Failed to update the exercise, status code = ${response.status}`)
    }
    navigate('/')
  };

  return (
    <>
      <h1>Edit Exercise</h1>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
      <input 
        type="text"
        value={reps}
        onChange={e => setReps(e.target.value)} />
      <input 
        type="text"
        value={weight}
        onChange={e => setWeight(e.target.value)} />
      <input 
        type="text"
        value={unit}
        onChange={e => setUnit(e.target.value)} />
      <input 
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)} />
      <button 
        onClick={editExercise}
      >Save</button>
    </>
  )
};

export default EditExercise