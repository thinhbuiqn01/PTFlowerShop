import React from "react";

export const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type);
    console.log("prev State", prevState);
    console.log("action", action);
    const nextState = reducer(prevState, action);
    console.log("next State", nextState);
    console.groupEnd();
    return nextState;
  };
};

export default logger;
