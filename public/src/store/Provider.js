import { useReducer } from "react";
import Context from "./Context";
import logger from "./logger";

import reducer, { initState } from "./reducers";

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default StoreProvider;
