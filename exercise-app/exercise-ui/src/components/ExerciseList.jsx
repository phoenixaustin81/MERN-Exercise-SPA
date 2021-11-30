import React from "react";
import Exercise from "./Exercise";
import { Link } from 'react-router-dom';

function ExerciseList({ exercises, toEdit, toDelete }) {
  return (
    <>
      <table>
        <caption>Exercises</caption>
        <thead>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => <Exercise 
            exercise={exercise}
            toEdit={toEdit} 
            toDelete={toDelete} 
            key={i} />)}
        </tbody>
      </table><br />
      <Link to='/AddExercise'>Add an Exercise</Link>
    </>
  )
}

export default ExerciseList