import { combineReducers } from "redux";
import todos from "../reducers/todos";
import loading from "../reducers/loading";
import goals from "../reducers/goals";

export default combineReducers({ todos, goals, loading });
