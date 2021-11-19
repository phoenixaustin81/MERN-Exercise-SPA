import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/exercises');

const db = mongoose.connection;

db.once('open', () => console.log("Successfully connected to database."));