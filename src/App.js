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
//import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
// Import Bootstrap CSS
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/workouts" element={<Workout />} />
        <Route path="/form" element={<WorkoutForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
