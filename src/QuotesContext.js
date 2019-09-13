import React, { createContext, useReducer } from 'react';

export const QuotesContext = createContext({});

const initialState = {
  fetchingQuotes: true,
  quotes: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUOTES_SUCCESS': {
      const {
        quotes,
      } = action;
      return {
        ...state,
        quotes,
        fetchingQuotes: false,
      };
    }
    case 'GET_QUOTES_FAILURE':
      return { ...state, fetchingQuotes: false };
    default:
      return state;
  }
};

export const QuotesProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuotesContext.Provider value={[state, dispatch]}>
      {props.children}
    </QuotesContext.Provider>
  );
}