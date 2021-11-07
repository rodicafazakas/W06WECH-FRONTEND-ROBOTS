import { useEffect } from "react";
import useRobots from "../hooks/useRobots";
import Robot from "./Robot";
import "./RobotsList.css";

const RobotsList = () => {

  const {robots, loadRobots} = useRobots();

  useEffect( ()=> {
    loadRobots()
  }, [loadRobots]) 

  return (
    <div className="robots-list">
      <ul className = "cards-list">
        {robots && robots.length ?
          robots.map( (robot) => <Robot key={robot._id} robot={robot} />) 
            : "There is no data available from the Heroku API"  
        }
      </ul>
    </div>
  )
};

export default RobotsList;

