
import { loadRobotsAction, createRobotAction, deleteRobotAction} from "../actions/actionCreators";

const apiUrl="https://robots-app.herokuapp.com/robots";
const token = "h29D8b23Llm45";

// const apiUrl = "http://localhost:4050/robots"

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(apiUrl);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots)); 
}

export const createRobotThunk = (robot) => async(dispatch) => {
  const response = await fetch(`${apiUrl}/create?token=${token}`, {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    });
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
  const response = await fetch(`${apiUrl}/delete/${id}?token=${token}`, {method: "DELETE",});
    if (response.ok) {
      dispatch(deleteRobotAction(id));
    }
  }
};


// const token = Json.parse(localStorage.getItem("pablo"));
//const {data: token} =  
// headers: {"Authorization": "Bearer" + token}