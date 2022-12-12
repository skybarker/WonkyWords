import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center gap-x-10 bg-green-400 py-2 mb-8">
      <Link to={`/`}>Login</Link>
      <Link to={`/welcome`}>Stories</Link>
      <Link to={`/about`}>About</Link>
      <div>Lookup widget</div>
      <div>Welcome tag </div>
    </nav>
  );
}
