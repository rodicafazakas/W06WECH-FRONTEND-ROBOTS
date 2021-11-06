const Robot = (robot) => {
  return (
    <section className="card__robot">
      <h2> {robot.name} </h2>
      <img src="https://media.istockphoto.com/photos/-picture-id500962582?s=612x612" alt={robot.name}/>
      <ul className="card__features">
        <li> Speed: {robot.features.speed} </li>
        <li> Strength: {robot.features.strength} </li>
        <li> Creation Date: {robot.features.creationDate} </li>
      </ul>
    </section>
  )
};

export default Robot;