import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import api from '../utils/api';
import theme from '../utils/theme';
import { Row, Column, List, ListItem, Title } from '../components/ui';

import { QuotesContext } from '../QuotesContext';

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

const Quotes = () => {
  const [state, dispatch] = useContext(QuotesContext);

  useEffect(() => {
    api
      .get(`/quotes`)
      .then(res => {
        dispatch({ type: 'GET_QUOTES_SUCCESS', quotes: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'GET_QUOTES_FAILURE' });
      });
  }, [dispatch]);

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
            <StyledLink to={`/quotes/${quote.id}`}>
              <p>{quote.author}</p>
            </StyledLink>
            <small>This is some dummy short text</small>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Quotes;