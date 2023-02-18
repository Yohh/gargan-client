import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = (newReducers = {}) =>
  combineReducers({
    ...newReducers,
  });

export default rootReducer;
