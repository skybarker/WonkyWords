import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Nav() {
  return (
    <nav className="relative flex items-center gap-x-10 bg-green-400 py-2 px-4 mb-8 font-bold">
      <Link to={`/`}>Login</Link>
      <Link to={`/welcome`}>Stories</Link>
      <Link to={`/about`}>About</Link>
    </nav>
  );
}

Nav.propTypes = {
  user: PropTypes.object,
};
