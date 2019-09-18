import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
// import parse from 'parse-link-header';
// import queryString from 'query-string';

import api from '../utils/api';
import theme from '../utils/theme';
import { Row, Column, Title, StyledLink } from '../components/ui';
import QuotesList from './quotes/QuotesList';
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

const EmptyWrapper = styled.div`
  background: ${props => props.theme.colors.lightBlue};
  padding: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.sm};
`;

const Quotes = () => {
  const [state, dispatch] = useContext(QuotesContext);

  useEffect(() => {
    api
      .get(`/quotes`)
      .then(({ data, headers }) => {
        // const parsedLink = parse(headers.link)
        // console.log(parsedLink)
        dispatch({
          type: 'GET_QUOTES_SUCCESS',
          quotes: data
        });
      })
      .catch(err => {
        dispatch({ type: 'GET_QUOTES_FAILURE' });
      });
  }, [dispatch]);

  const { fetchingQuotes, quotes } = state;

  if (fetchingQuotes) return null;

  return (
    <React.Fragment>
      <Row paddingX={`${theme.spacing.sm}`}>
        <Column>
          <StyledLink to="/"><Title>Quotes</Title></StyledLink>
        </Column>
        <Column width="50px" justify="flex-end">
          <Title data-cy="quotes-count">{quotes.length}</Title>
        </Column>
      </Row>
      {quotes.length > 0 &&
        <Row padding={`${theme.spacing.sm}`}>
          <SearchBar placeholder="Search..." />
        </Row>
      }
      {quotes.length > 0 ? (
        <QuotesList quotes={quotes} />
      ) : (
          <EmptyWrapper>
            <h4 data-cy="no-quotes">No Quotes</h4>
          </EmptyWrapper>
        )}

    </React.Fragment>
  )
}

export default Quotes;