import "./Robot.css";
const Robot = (robot) => {
  return (
    <li className="card__robot">
      <h4> {robot.robot.name} </h4>
      <img src={robot.robot.image} alt={robot.robot.name} width="200" height="230"/>
      <ul className="card__features">
        <li> Speed: {robot.robot.features.speed} </li>
        <li> Strength: {robot.robot.features.strength} </li>
        <li> Creation Date: {robot.robot.features.creationDate} </li>
      </ul>
    </li>
  )
};

export default Robot;