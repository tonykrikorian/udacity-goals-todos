import { ADD_GOAL } from "../actions/goals";

const greatGoal = store => next => action => {
  if (action.type === ADD_GOAL) {
    alert(`${action.goal.name} is a great goal!!`);
  }
  return next(action);
};

export default greatGoal;
