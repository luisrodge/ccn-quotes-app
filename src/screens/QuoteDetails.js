import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Plus } from 'styled-icons/boxicons-regular';

import { Row } from '../components/ui';
import api from '../utils/api';

import Header from './quoteDetails/Header';
import Body from './quoteDetails/Body';

import { QuotesContext } from '../QuotesContext';

const NewIcon = styled(Plus)`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  padding: ${props => props.theme.spacing.xs};
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0;
  z-index: 999;
  cursor: pointer;
`;

const QuoteWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const QuoteDetails = ({ match }) => {
  const [state, dispatch] = useContext(QuotesContext);

  const { quotes, fetchingQuote, quoteError, quote } = state;

  const quoteId = match.params.id;

  const quoteObj = quotes.find(quote => quote.id == quoteId);

  useEffect(() => {
    if (quoteObj) {
      dispatch({ type: 'GET_QUOTE_SUCCESS', quote: quoteObj });
      return;
    }
    // dispatch({ type: 'GET_QUOTE' });
    api
      .get(`/quotes/${quoteId}`)
      .then(res => {
        dispatch({ type: 'GET_QUOTE_SUCCESS', quote: res });
      })
      .catch(err => {
        console.log("errror", err);
        dispatch({ type: 'GET_QUOTE_FAILURE' });
      });
  }, [dispatch, quoteId]);

  return (
    <QuoteWrapper>
      {fetchingQuote ? (
        <p>loading...</p>
      ) : (
          quoteError === '' ? (
            <React.Fragment>
              <Header quote={quote} />
              <Body quote={quote} />
            </React.Fragment>
          ) : (
              <Row>
                <h2>{quoteError}</h2>
              </Row>
            )
        )}
      <NewIcon size={30} />
    </QuoteWrapper>
  )
}

export default QuoteDetails;