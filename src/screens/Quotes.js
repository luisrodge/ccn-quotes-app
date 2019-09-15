import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import api from '../utils/api';
import theme from '../utils/theme';
import { Row, Column, List, ListItem, Title, StyledLink } from '../components/ui';

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

const BodyPreview = styled.small`
  font-family: ${props => props.theme.fonts.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.grayAlt};
`;

const Quotes = () => {
  const [state, dispatch] = useContext(QuotesContext);

  useEffect(() => {
    api
      .get('/quotes')
      .then(({ data, headers }) => {
        console.log(headers.link)
        dispatch({ type: 'GET_QUOTES_SUCCESS', quotes: data });
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
          <Title>{quotes.length}</Title>
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
            <BodyPreview>
              {quote.body}
            </BodyPreview>
          </ListItem>
        ))}
      </List>
      <Row paddingX={`${theme.spacing.sm}`}>
        Load More...
      </Row>
    </React.Fragment>
  )
}

export default Quotes;