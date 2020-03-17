import checker from "../middleware/checker";
import greatGoal from "../middleware/greatGoal";
import logger from "../middleware/logger";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default applyMiddleware(thunk, checker, greatGoal, logger);
