import { Link } from "react-router-dom";

import "./Navbar.css"
import logoImage from "../assets/trackify_ai_logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-image">
        <Link to="/">
          <img src={logoImage} alt="TrackifyAI Logo" className="logo-image" />
          <span className="logo-text">TrackifyAI</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;