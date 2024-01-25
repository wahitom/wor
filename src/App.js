// import logo from "./logo.svg";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  return(
    <div>
    <Navbar/>
    <Routes>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
