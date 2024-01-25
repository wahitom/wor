// import logo from "./logo.svg";
// import "./App.css";



import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Contacts from "./components/Contacts";
import WorkoutForm from "./pages/WorkoutForm";
import Workout from "./pages/Workouts";
import Reviews from "./pages/Reviews";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";


import Home from "./pages/Home";
// Import Bootstrap CSS
function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/workouts" element={<Workout />} />
        <Route path="/form" element={<WorkoutForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
