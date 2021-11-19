import mongoose from 'mongoose';
import './db-connection.mjs';

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
  const exercise = new Exercise({ name, reps, weight, unit, date });
  return await exercise.save();
};

const fetchExercises = async () => {
  return await Exercise.find();
};

const updateExercise = async (name, reps, weight, unit, date, id) => {
  const updates = { name, reps, weight, unit, date };
  const options = { new: true, runValidators: true };
  return await Exercise.findByIdAndUpdate(id, updates, options);
};

const deleteExercise = async id => {
  return await Exercise.findByIdAndDelete(id)
};

export { createExercise, fetchExercises, updateExercise, deleteExercise }