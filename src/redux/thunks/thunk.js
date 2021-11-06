
import { loadRobotsAction, createRobotAction, deleteRobotAction, updateRobotAction } from "../actions/actionCreators";

const apiUrl="https://robots-app.herokuapp.com/robots";

export const loadRobotsThunk = () => async () => {
  const response = await fetch(apiUrl);
  const robots = await response.json();
  dispatchEvent(loadRobotsAction(robots)); 
}