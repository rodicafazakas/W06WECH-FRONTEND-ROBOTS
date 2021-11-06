import { deleteRobotAction, loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of robots and a load action", () => {
    test("Then it should return a load type action (object) with the robots received", () => {
        const robotsList = [
          {
            id: 1,
            name: "R2-D2",
            image: "https://media.istockphoto.com/photos/-picture-id500962582?s=612x612",
            features: {
              speed: 4,
              strength: 9,
              creationDate: 1977,
            }
          },
          { id: 2,
            name: "rodney",
            image: "https://static.wikia.nocookie.net/robotcity/images/7/78/Rodney_Copperbottom.jpg/revision/latest?cb=20120220191544",
            features: {
              speed: 10,
              strength: 9,
              creationDate: 2015,
            }
          }
        ];
        const expectedAction = {
          type: actionTypes.loadRobots,
          robots: robotsList
        }

        const resultAction = loadRobotsAction(robotsList);

        expect(resultAction).toEqual(expectedAction);

    })
  })
})

describe("Given a delete actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action for the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteRobot,
        id,
      };

      const resultAction = deleteRobotAction(id);

      expect(resultAction).toEqual(expectedAction);
    })
  })
})