import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is where we use it in a component
export const useStateValue = () => useContext(StateContext);
