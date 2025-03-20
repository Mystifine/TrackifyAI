import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to TrackifyAI</h1>
      <Link to="/dashboard">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;