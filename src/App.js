// import logo from "./logo.svg";
// import "./App.css";
import WorkoutForm from "./pages/WorkoutForm";
import Workout from "./pages/Workouts";
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
   
  <Routes>
  <Route path="/" element={<Workout/>} />
      <Route path="/form" element={<WorkoutForm/>} />
    </Routes>
  </>
}

export default App;
