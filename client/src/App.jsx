import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"

import './App.css'

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
      </Routes>
    </Router>
  )
}

export default App
