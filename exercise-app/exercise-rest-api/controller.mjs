import express from 'express';
import * as exercises from './model.mjs';

const app = express();
const PORT = 3000;

app.use(express.json())

app.post('/exercises', (req, res) => {
  exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(doc => res.status(201).json(doc))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.get('/exercises', (req, res) => {
  exercises.fetchExercises()
    .then(docs => res.status(200).json(docs))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.put('/exercises/:id', (req, res) => {
  exercises.updateExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date, req.params.id)
    .then(doc => res.status(200).json(doc))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.delete('/exercises/:id', (req, res) => {
  exercises.deleteExercise(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));