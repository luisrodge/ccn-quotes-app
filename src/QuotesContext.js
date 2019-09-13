import React, { createContext, useReducer } from 'react';

export const QuotesContext = createContext({});

const initialState = {
  fetchingQuotes: true,
  quotes: [],
  fetchingQuote: true,
  quote: {},
  quoteError: ''
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
    case 'GET_QUOTE': {
      return {
        ...state,
        fetchingQuote: true,
      };
    }
    case 'GET_QUOTE_SUCCESS': {
      const {
        quote,
      } = action
      return {
        ...state,
        quote,
        quoteError: '',
        fetchingQuote: false,
      };
    }
    case 'GET_QUOTE_FAILURE':
      return {
        ...state,
        quote: {},
        quoteError: 'Something went wrong! Please try again later.',
        fetchingQuote: false,
      };
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