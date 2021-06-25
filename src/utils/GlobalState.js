import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
  
};

const reducer = (state, action) => {
  
};

const GlobalProvider = ({...props }) => {
  const [state, dispatch] = useReducer(reducer, {...initialState});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
