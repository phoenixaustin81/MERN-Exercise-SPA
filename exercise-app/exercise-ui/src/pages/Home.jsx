import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import ExerciseList from '../components/ExerciseList'

function Home({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate()

  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const exercises = await response.json();
    setExercises(exercises)
  }

  const toEdit = exercise => {
    setExerciseToEdit(exercise);
    navigate('/EditExercise')
  }

  const toDelete = async id => {
    const response = await fetch(`/exercises/${id}`, {method: 'DELETE'});
    if (response.status === 204) { 
      setExercises(exercises.filter(exercise => exercise._id !== id))
    } else {
      console.error(`Failed to delete exercise with id=${id}, status code=${response.status}`)
    }
  }

  useEffect(() => {
    loadExercises();
  }, [])

  return (
    <>
      <ExerciseList 
        exercises={exercises} 
        toEdit={toEdit} 
        toDelete={toDelete} />
    </>
  )
}

export default Home