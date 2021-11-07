import "./Robot.css";
import useRobots from "../hooks/useRobots";

const Robot = (robot) => {

  const { deleteRobot } = useRobots();

  const deleteOnClick = () => {
    deleteRobot(robot.robot._id);
  }

  return (
    <li className="card__robot">
      <h4> {robot.robot.name} </h4>
      <img src={robot.robot.image} alt={robot.robot.name} width="200" height="230"/>
      <div className="card__box">
        <ul className="card__features">
          <li> Speed: {robot.robot.features.speed} </li>
          <li> Strength: {robot.robot.features.strength} </li>
          <li> Creation Date: {robot.robot.features.creation_date} </li>
        </ul>
        <button className="card__delete" onClick={deleteOnClick}>Delete</button>
      </div>
    </li>
  )
};

export default Robot;