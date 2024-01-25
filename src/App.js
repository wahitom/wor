// import logo from "./logo.svg";
// import "./App.css";
import WorkoutForm from "./pages/WorkoutForm";
import Workout from "./pages/Workouts";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Workout />} />
        <Route path="/form" element={<WorkoutForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
