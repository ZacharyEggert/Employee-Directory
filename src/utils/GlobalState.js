import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
  employees:[],
  currentEmployee:null,
  sortBy:'first',
  sortDirection:true,

};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addEmployee':
      return {...state, employees:[...state.employees, action.data]}
    case 'addEmployeeBulk':
      return {...state, employees:[...state.employees, ...action.data ]}
    case 'toggleSortDirection':
      return {...state, sortDirection:!state.sortDirection}
    case 'sortBy':
      return {...state, sortBy:action.data}
    case 'setCurrentEmployee':
      return {...state, currentEmployee:action.data}
    case 'unsetCurrentEmployee':
      return {...state, currentEmployee:null}
      
    default: return state;
  }
};

const GlobalProvider = ({...props }) => {
  const [state, dispatch] = useReducer(reducer, {...initialState});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
