import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

function Exercise({ exercise, toEdit, toDelete }) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td><FaEdit onClick={() => toEdit(exercise)} /></td>
      <td><MdDeleteForever onClick={() => toDelete(exercise._id)} /></td>
    </tr>
  )
}

export default Exercise