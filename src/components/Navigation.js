import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // const isAuthenticated = true;

  return(
    <nav>
      <h1> RoboStars </h1>
      <ul className="nav-list">
            <li className="nav-item"> <Link to="robots"> RoboStars </Link> </li>
            <li className="nav-item"> <Link to="form"> FORM </Link> </li>
            <li className="nav-item"> <Link to="logout" > LOGOUT </Link> </li>
            <li className="nav-item"> <Link to="login"> LOGIN </Link> </li>
      </ul>
    </nav>
  )
}

export default Navigation;