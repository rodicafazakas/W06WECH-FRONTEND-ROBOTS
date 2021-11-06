import actionTypes from "./actionTypes";

export const createRobotAction = (robot) => ({
  type: createRobotAction,
  robot,
});

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
}); 

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
})