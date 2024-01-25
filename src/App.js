import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Contacts from "./components/Contacts";
// Import Bootstrap CSS
function App() {
  return (
    <div>
      <Routes>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
