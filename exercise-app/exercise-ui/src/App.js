import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddExercise from './pages/AddExercise';
import EditExercise from './pages/EditExercise';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home setExerciseToEdit={setExerciseToEdit} />} />
          <Route path='/AddExercise' element={<AddExercise />} />
          <Route path='/EditExercise' element={<EditExercise exerciseToEdit={exerciseToEdit} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
