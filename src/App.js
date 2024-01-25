import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Contacts from "./components/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Import Bootstrap CSS
function App() {
  return (
    <div>
      <Routes>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
