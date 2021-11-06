
import { loadRobotsAction} from "../actions/actionCreators";

const apiUrl="https://robots-app.herokuapp.com/robots";

// const apiUrl = "http://localhost:4050/robots"
// const apiUrl="https://todo-api-rodicaf.herokuapp.com/tasks";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(apiUrl);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots)); 
}