import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import api from '../utils/api';

import theme from '../utils/theme';
import { Row, Column, List, ListItem, Title } from '../components/ui';

const SearchBar = styled.input`
  width: 100%;
  line-height: 33px;
  border: 0;
  border-radius: 3px;
  padding: 0 ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.lightBlue};
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover, &:focus {
    text-decoration: none;
  }
`;

const initialState = {
  quotes: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUOTES_SUCCESS': {
      const {
        quotes,
      } = action;
      return {
        ...state,
        quotes,
        loading: false,
      };
    }
    case 'GET_QUOTES_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
};

const Quotes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    api
      .get(`/quotes`)
      .then(res => {
        dispatch({ type: 'GET_QUOTES_SUCCESS', quotes: res });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'GET_QUOTES_FAILURE' });
      });
  }, []);

  const { loading, quotes } = state;

  if (loading) return null;

  return (
    <React.Fragment>
      <Row paddingX={`${theme.spacing.sm}`}>
        <Column>
          <StyledLink to="/"><Title>Quotes</Title></StyledLink>
        </Column>
        <Column width="50px" justify="flex-end">
          <Title>10</Title>
        </Column>
      </Row>
      <Row padding={`${theme.spacing.sm}`}>
        <SearchBar placeholder="Search..." />
      </Row>
      <List>
        {quotes.map(quote => (
          <ListItem key={quote.id}>
            <StyledLink to={`/quotes/${quote.id}`}><p>{quote.author}</p></StyledLink>
            <small>This is some dummy short text</small>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Quotes;